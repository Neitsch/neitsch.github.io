import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostPreview, {
  POST_PREVIEW_FRAGMENT,
} from "../../components/post-preview";
import SectionSeparator from "../../components/section-separator";
import type {
  AllAuthorsQuery,
  AllAuthorsQueryVariables,
  LookupAuthorQuery,
  LookupAuthorQueryVariables,
} from "../../generated/graphql";
import { getApolloClient } from "../../lib/graphcms";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import gql from "graphql-tag";
import type { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const ALL_AUTHORS = gql`
  query AllAuthors {
    authors {
      slug
      posts {
        slug
      }
    }
  }
`;
export const LOOKUP_AUTHOR = gql`
  ${POST_PREVIEW_FRAGMENT}
  fragment AuthorInfo on Author {
    name
    biography
    title
  }
  query LookupAuthor($slug: String!) {
    postsConnection(where: { author: { slug: $slug } }) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
    author(where: { slug: $slug }) {
      ...AuthorInfo
    }
  }
`;
export default function Author({
  author,
  postsConnection,
}: LookupAuthorQuery): JSX.Element {
  if (!author) {
    throw Error("author is null");
  }
  return (
    <Layout>
      <Container>
        <Header />
        <Card>
          <CardContent>
            <Typography component="h1" variant="h4">
              {author.name} ({author.title})
            </Typography>
            <ReactMarkdown rehypePlugins={[[rehypeHighlight]]}>
              {author.biography}
            </ReactMarkdown>
          </CardContent>
        </Card>
        <SectionSeparator />
        <Typography variant="h4">Posts by the author</Typography>
        <Grid container spacing={5}>
          {postsConnection.edges.map(({ node }) => (
            <Grid item key={node.slug} md={6} xs={12}>
              <PostPreview post={node} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  readonly params?: { readonly slug?: string; readonly postCursor?: string[] };
  readonly preview?: boolean;
}) => {
  const client = getApolloClient();
  const result = await client
    .query<LookupAuthorQuery, LookupAuthorQueryVariables>({
      query: LOOKUP_AUTHOR,
      variables: {
        slug: params?.slug ?? "",
      },
    })
    .then(({ data }: { readonly data: Readonly<LookupAuthorQuery> }) => {
      return data;
    });
  return {
    props: result,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const client = getApolloClient();
  const { authors } = await client
    .query<AllAuthorsQuery, AllAuthorsQueryVariables>({ query: ALL_AUTHORS })
    .then(({ data }: { readonly data: Readonly<AllAuthorsQuery> }) => {
      return data;
    });
  const authorPaths = authors.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return {
    paths: authorPaths,
    // fallback: true,
    fallback: false,
  };
};
