import Container from "../components/container";
import HeroPost from "../components/hero-post";
import { HERO_POST_FRAGMENT } from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { POST_PREVIEW_FRAGMENT } from "../components/post-preview";
import { IndexLookupQuery } from "../generated/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";
import { GetStaticProps } from "next";
import Head from "next/head";

export const INDEX_LOOKUP = gql`
  ${POST_PREVIEW_FRAGMENT}
  ${HERO_POST_FRAGMENT}

  query IndexLookup {
    posts(orderBy: date_DESC, first: 20) {
      ...PostPreview
      ...HeroPost
    }
  }
`;

export default function Index(lookup: IndexLookupQuery): JSX.Element {
  const { posts } = lookup;
  const heroPost = posts[0];
  const morePosts = [...posts].slice(1);
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Nigel Schuster&apos;s blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <MoreStories moreStories={morePosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_PROJECT_API ?? "",
    cache: new InMemoryCache(),
  });
  const posts = await client
    .query({
      query: INDEX_LOOKUP,
    })
    .then((result) => {
      return result.data;
    });
  return {
    props: posts,
  };
};
