import { MORE_STORIES } from "../components/more-stories";
import type {
  PostAndMorePostsQuery,
  PostAndMorePostsQueryVariables,
  AllPostsWithSlugQuery,
  AllPostsWithSlugQueryVariables,
} from "../generated/graphql";
import { Stage } from "../generated/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";

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
    .query<AllPostsWithSlugQuery, AllPostsWithSlugQueryVariables>({
      query: ALL_POSTS_WITH_SLUG,
    })
    .then(({ data }: { readonly data: Readonly<AllPostsWithSlugQuery> }) => {
      return data;
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
): Promise<PostAndMorePostsQuery> {
  const client = new ApolloClient({
    uri: process.env.GRAPHCMS_PROJECT_API ?? "",
    cache: new InMemoryCache(),
  });
  return client
    .query<PostAndMorePostsQuery, PostAndMorePostsQueryVariables>({
      query: POST_AND_MORE_POSTS,
      variables: {
        stage: Stage.Published,
        slug,
      },
    })

    .then(({ data }: { readonly data: Readonly<PostAndMorePostsQuery> }) => {
      return data;
    });
}
