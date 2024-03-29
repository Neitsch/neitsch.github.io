import AuthorChip, { AUTHOR_CHIP_FRAGMENT } from "../../components/author-chip";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MoreStories, { MORE_STORIES } from "../../components/more-stories";
import SectionSeparator from "../../components/section-separator";
import type { PostLookupFragment } from "../../generated/graphql";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/graphcms";
import {
  Card,
  Box,
  Typography,
  CardContent,
  CardMedia,
  NoSsr,
} from "@mui/material";
import gql from "graphql-tag";
import langx86 from "highlight.js/lib/languages/x86asm";
import "highlight.js/styles/default.css";
import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import {
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share";
import rehypeHighlight from "rehype-highlight";

export const POST_FRAGMENT = gql`
  ${AUTHOR_CHIP_FRAGMENT}
  fragment Post on Post {
    title
    excerpt
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
      ...AuthorChip
    }
  }
`;
export const POST_LOOKUP = gql`
  ${MORE_STORIES}
  fragment PostLookup on Query {
    post(stage: $stage, where: { slug: $slug }) {
      ...Post
    }
    ...MoreStories
  }
`;

export default function Post({
  post,
  moreStories,
}: PostLookupFragment): JSX.Element {
  let content = <span>Something went wrong</span>;
  if (post) {
    const head = (
      <Head>
        <title>{post.title}</title>
        <meta content={post.excerpt ?? ""} name="description" />
        <meta content={post.title} property="og:title" />
        <meta content={post.excerpt ?? ""} property="og:description" />
        <meta content="article" property="og:type" />
        <meta content="en_US" property="og:locale" />
      </Head>
    );
    const titleElem = (
      <Box flexGrow={1}>
        <Typography component="h1" variant="h3">
          {post.title}
        </Typography>
      </Box>
    );
    const authorElem = post.author ? (
      <Box alignSelf="flex-end">
        <AuthorChip author={post.author} />
      </Box>
    ) : null;
    const body = (
      <Card>
        <CardMedia component="img" src={post.coverImage?.url} />
        <CardContent>
          <Box display="flex">
            {titleElem}
            {authorElem}
          </Box>
          <ReactMarkdown
            rehypePlugins={[
              [rehypeHighlight, { languages: { x86asm: langx86 } }],
            ]}
          >
            {post.content}
          </ReactMarkdown>
          <Typography sx={{ fontStyle: "italic", paddingBottom: "1.5em" }}>
            Published on {post.date}.
          </Typography>
          <NoSsr>
            {process.browser && (
              <div>
                <EmailShareButton url={window.location.href}>
                  <EmailIcon round />
                </EmailShareButton>
                <LinkedinShareButton url={window.location.href}>
                  <LinkedinIcon round />
                </LinkedinShareButton>
                <RedditShareButton url={window.location.href}>
                  <RedditIcon round />
                </RedditShareButton>
              </div>
            )}
          </NoSsr>
        </CardContent>
      </Card>
    );
    content = (
      <>
        {head}
        {body}
      </>
    );
  }

  return (
    <Layout>
      <Container>
        <Header />
        <>
          {content}
          <SectionSeparator />
          <MoreStories moreStories={moreStories} />
        </>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  readonly params?: { readonly slug?: string };
  readonly preview?: boolean;
}) => {
  const data = await getPostAndMorePosts(params?.slug ?? "");
  return {
    props: data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }: { readonly slug: string }) => {
      return {
        params: { slug },
      };
    }),
    // fallback: true,
    fallback: false,
  };
};
