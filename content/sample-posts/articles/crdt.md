---
title: "CRDTs - Sound good in theory, not in practice"
cover: "./img/cranes.jpg"
date: "05/05/2018"
category: "Distributed Systems"
tags:
    - Distributed Systems
    - CRDT
    - Conflict-Free Replicated Datatype
---
This term I did some research on conflict-free replicated datatypes (CRDTs). I will walk through what they are, why the concept is cool, but they don't work in practice.

# What are CRDTs?
CRDT is a data structure that propagates concurrently in a network without the need for coordination.
CRDTs are mathematically proven to not cause inconsistencies.
This property is desirable, since all partitions of a split-brain scenario can continue accepting writes.
Since machines continue functioning independently, not all writes will immediately seen by all machines.
CRDTs are used in eventually consistent systems.

Let's look at a concrete example of a CRDT: a simple counter (G-Counter).
To represent a counter we actually maintain N counters, where N is the number of machines.
Each machine independently increments its counter if it receives a write.
When two machines communicate each one sends along the latest values of all counters it knows of.
A machine then takes the max of the local value and the received value for each counter.
When a user reads the value of a counter, the system returns the sum of all counters.

Based on similar concepts we can construct other similar data types:
* PN-Counter: A PN-Counter supports increments and decrements.
This is achieved by using two G-Counter, one keeps track of increments, the other one keeps track of decrements.
* G-Set: A G-Set is a set to which elements can be added to, but not removed.
Sets are propagates by taking the union of the local set with the received set.
* 2P-Set: A 2P-Set allows for adding and removing items once.
Once a item was removed, it can not be added again.
A 2P-Set is achieved by maintaining a tombstone set.
The tombstone set indicates which elements to exclude from the return value.

Another frequently used CRDT is a LWW-Set (Last-Write-Wins).
This data structure is able to handle repeated additions and removals by timestamping each change.
The timestamp is generated using vector clocks.
I personally do not like this data structure.
Vector clocks require consensus, consensus does not allow for a split-brain, and split-brain is a situation we fundamentally want to be able to handle with CRDTs.

# My Research
[Raymond](https://github.com/raymondxu/) and I wanted to test the viability of CRDTs in practice.
For this, we took an existing application and migrated components of it to a CRDT store.

For this, we chose the application Vataxia, a simple social network with a Django backend. The [frontend](https://github.com/buckyroberts/Vataxia-Frontend) and [backend](https://github.com/buckyroberts/Vataxia) are completely decoupled. As our storage layer we chosee [Riak](docs.basho.com/riak/kv/2.2.3/learn/concepts/crdts/), a well established CRDT store.

We attempted to mirror the functionality provided by Vataxia originally. The two components we migrated are Voting and Messaging.

## Voting
Voting in Vataxia is simple. We broke it down into a few requirements:
* At most one Upvote or Downvote per user and post
* Vote removal must be possible
* No duplicate votes
* Only upvote OR downvote

Take a minute and think about how you would implement it.
We considered the following options:
* Using per post Counters: Counters sound simple and intuitive.
Counters do not check whether a user casted a duplicate vote, therefore this solution is not viable.
* Having a Set of voters per post: We considered using a G-Set, thereby eliminating the possibility of duplicate votes. This approach did not account for removing or changing one's vote.
We also considered using a 2P-Set, but this did not allow for the sequence upvote - remove vote - upvote.
This did not work either.
A LWW-Set fulfilled almost all requirements.
Yet, it did not work, because it did not allow to enforce only having an upvote OR a downvote, since we have to maintain a seperate upvote and downvote set.
* A map per post with key user and value vote: Each post maintans a LWW-Map. On each post the key of the map is the user ID, while the value is true or false (upvote / downvote, absence = no vote). This solution ended up being the only approach that was able to replicate the semantics of Vataxia.

## Messaging
In Vataxia messaging is akin to emails.
It does not allow for chats or threads.
Instead one sends individual messages that Vataxia treats completely separately.
The problems we faced here were different.
Implementing even a basic version was a lot harder.

We chose to use the following system.
Our system maintains messages in a LLW-Map, where the key is the timestamp and the sender, while the value is the actual message.
A G-Set maintained on the user referrences his sent and received messages.
Note, that a G-Set is unordered, therefore we must address this on the application level.
To retrieve the latest messages we order the set on the user by timestamp and then fetch the latest messages.
This process can be expensive, since we load the identifier for every single message ever sent/received into memory and sort it.

# Problems of CRDTs
We notice, that the LWW-Map is a crucial component for both components we converted.
For me personally that is a deal breaker for CRDTs.
Since we rely so heavily on vector clocks, we rely on consensus.
CRDTs do not circumvent consensus in those cases and do not make the implementation easier.
Our implementations almost converged to the usage of a simple KeyValue-store, but with a more limited set of operations.

The other major criticism for CRDTs is privacy.
If we do not use vector clocks, data that is written to the store will never be deleted.
Even a 2P-Set never truly deletes data, it merely marks it as hidden.
If an intruder gains access to the set, he/she can access the tombstone set and inspect deleted data.
Those semantics are at odds with the EU "right to be forgotten".

# Retrospective
CRDTs are an interesting concept.
If an application can fit into the computational model of CRDTs excluding LWW semantics then CRDTs are a great options.
Almost no application can allow for those semantics.
The fact that deletion is often not possible is a crucial flaw.

# Links
[Repository](https://github.com/raymondxu/crdt-project)

[Midterm presentation](https://docs.google.com/presentation/d/1i-AT59MD-DwwM-h1DFZUTj3qmx4_JYlojepA6IOauZI/edit?usp=sharing)

[Final presentation](https://docs.google.com/presentation/d/1i-AT59MD-DwwM-h1DFZUTj3qmx4_JYlojepA6IOauZI/edit?usp=sharing)

[Final paper](/uploads/crdt-paper.pdf)
