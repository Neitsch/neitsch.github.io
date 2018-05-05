---
title: "Lamport Clocks"
cover: "./img/clocks.jpg"
date: "02/20/2018"
category: "Distributed Systems"
tags:
    - Distributed Systems
    - Concurrency
    - Academic Writing
    - Synchronization
---
I read Leslie Lamport's [_Time, Clocks, and the Ordering of Events in a Distributed System_](https://lamport.azurewebsites.net/pubs/time-clocks.pdf). The paper is concise, yet profound and impactful!!

# Content
Lamport's paper is about the ordering of events.
His main goal is to provide an viable total ordering of events across machines based on a partial ordering.
He starts with baby steps, by looking at _before_ and _after_ as a temporal ordering in the context of events.
As he points out, determining whether one event occured before or after another one is not always possible due to the spacial distance of the machines.
What we instead focus on is _partial ordering_.
This concept is about whether some event a must have occured before b given the information a system has.
If we know that a occured before b, then we say "a --> b", otherwise "a --/> b".
If "a --/> b" and "b --/> a", then the events are concurrent.

Now, we want to be able to have a order of events that all machines agree on and that respects partial ordering.
To achieve this, Lamport introduces _Logical Clocks_.
Each time some event occurs on a machine (such as receiving a message), it increments its clock.
When two machines exchange a message, then the sender attaches timestamp.
The receiver sets its timestamp to be greater than the message timestamp.
With this, we can assign each event on a machine a timestamp.
When we propagate events to other machines in the system the receiver uses the this timestamp to determine the ordering.
The name of the machine generating the timestamp serves as tie breaker.

With this simple setup we are able to introduce a total ordering in the system.
Note, that this setup disregards Machine failure and lost messages (both are non trivial to solve).

# Writing
The most fascinating part of the paper was not the result, but the way we obtained the result.
Lamport's style of writing is incredibly clear and concise.
Reading the paper is straightforward, yet the impact is profound.
This paper revolutionaized how we reason about events, time and synchronization.
I wish more academics write papers this well.

P.S.: You can find my presentation on this topic [here](https://docs.google.com/presentation/d/1ElrYSbSfCI-ROX1p0QvQN5VWhsBcNSIHTYoR9QChVUI/edit#slide=id.p3).