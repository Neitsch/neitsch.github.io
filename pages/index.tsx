import Container from "../components/container";
import HeroPost, { HERO_POST_FRAGMENT } from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { POST_PREVIEW_FRAGMENT } from "../components/post-preview";
import type {
  IndexLookupQuery,
  IndexLookupQueryVariables,
} from "../generated/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";
import type { GetStaticProps } from "next";
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

export default function index(lookup: IndexLookupQuery): JSX.Element {
  const { posts } = lookup;
  const morePosts = [...posts];
  const heroPost = morePosts.shift();
  const heroPostElem = heroPost ? <HeroPost post={heroPost} /> : null;
  return (
    <Layout>
      <Head>
        <title>Nigel Schuster&apos;s blog</title>
      </Head>
      <Container>
        <Intro />
        {heroPostElem}
        <MoreStories moreStories={morePosts} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_PROJECT_API ?? "",
    cache: new InMemoryCache(),
  });
  const posts = await client
    .query<IndexLookupQuery, IndexLookupQueryVariables>({
      query: INDEX_LOOKUP,
    })
    .then(({ data }: { readonly data: Readonly<IndexLookupQuery> }) => {
      return data;
    });
  return {
    props: posts,
  };
};
