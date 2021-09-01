import { MORE_STORIES } from "../components/more-stories";
import {
  PostAndMorePostsQuery,
  AllPostsWithSlugQuery,
} from "../generated/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";

const GET_PREVIEW_POST_BY_SLUG = gql`
  query PreviewPostBySlug($slug: String!, $stage: Stage!) {
    post(where: { slug: $slug }, stage: $stage) {
      slug
    }
  }
`;

export async function getPreviewPostBySlug(
  slug: string,
): Promise<{ slug: string }> {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_PROJECT_API ?? "",
    cache: new InMemoryCache(),
  });
  return client
    .query({
      query: GET_PREVIEW_POST_BY_SLUG,
      variables: {
        slug,
        stage: "DRAFT",
      },
    })
    .then((result) => {
      return result.data;
    });
}

const ALL_POSTS_WITH_SLUG = gql`
  query AllPostsWithSlug {
    posts {
      slug
    }
  }
`;

export async function getAllPostsWithSlug(): Promise<AllPostsWithSlugQuery> {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_PROJECT_API ?? "",
    cache: new InMemoryCache(),
  });
  return client
    .query({
      query: ALL_POSTS_WITH_SLUG,
    })
    .then((result) => {
      return result.data;
    });
}

const POST_AND_MORE_POSTS = gql`
  ${MORE_STORIES}
  query PostAndMorePosts($slug: String!, $stage: Stage!) {
    post(stage: $stage, where: { slug: $slug }) {
      title
      slug
      content
      date
      ogImage: coverImage {
        url(
          transformation: {
            image: { resize: { fit: crop, width: 2000, height: 1000 } }
          }
        )
      }
      coverImage {
        url(
          transformation: {
            image: { resize: { fit: crop, width: 2000, height: 1000 } }
          }
        )
      }
      author {
        name
        picture {
          url(
            transformation: {
              image: { resize: { fit: crop, width: 100, height: 100 } }
            }
          )
        }
      }
    }
    ...MoreStories
  }
`;

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<PostAndMorePostsQuery> {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_PROJECT_API ?? "",
    cache: new InMemoryCache(),
  });
  return client
    .query({
      query: POST_AND_MORE_POSTS,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    })

    .then((result) => {
      return result.data;
    });
}
