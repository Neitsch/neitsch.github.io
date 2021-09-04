import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import { MORE_STORIES } from "../../components/more-stories";
import SectionSeparator from "../../components/section-separator";
import { PostLookupFragment } from "../../generated/graphql";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/graphcms";
import {
  Card,
  Box,
  Chip,
  Avatar,
  Typography,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import gql from "graphql-tag";
import langx86 from "highlight.js/lib/languages/x86asm";
import "highlight.js/styles/default.css";
import { GetStaticProps, GetStaticPaths } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
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

export default function Post(lookup: PostLookupFragment): JSX.Element {
  const router = useRouter();
  const { post } = lookup;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={false}>
      <Container>
        <Header />
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            {post ? (
              <>
                <Head>
                  <title>{post.title}</title>
                  <meta name="description" content={post.excerpt ?? ""} />
                  <meta property="og:title" content={post.title} />
                  <meta
                    property="og:description"
                    content={post.excerpt ?? ""}
                  />
                  <meta property="og:type" content="article" />
                  <meta property="og:locale" content="en_US" />
                </Head>
                <Card>
                  <CardMedia component="img" src={post.coverImage?.url} />
                  <CardContent>
                    <Box display="flex">
                      <Box flexGrow={1}>
                        <Typography variant="h4">{post.title}</Typography>
                      </Box>
                      <Box alignSelf="flex-end">
                        <Chip
                          avatar={
                            <Avatar
                              alt={post.author?.name}
                              src={post.author?.picture?.url}
                            />
                          }
                          label={post.author?.name}
                        />
                      </Box>
                    </Box>
                    <ReactMarkdown
                      rehypePlugins={[
                        [rehypeHighlight, { languages: { x86asm: langx86 } }],
                      ]}
                    >
                      {post.content}
                    </ReactMarkdown>
                    <div suppressHydrationWarning={true}>
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
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <span>Something went wrong</span>
            )}
            <SectionSeparator />
            <MoreStories {...lookup} />
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}: {
  params?: { slug?: string };
  preview?: boolean;
}) => {
  const data = await getPostAndMorePosts(params?.slug ?? "", preview);
  return {
    props: data,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getAllPostsWithSlug();
  return {
    paths: posts.map((input) => {
      const slug = input?.slug ?? "";
      return {
        params: { slug },
      };
    }),
    // fallback: true,
    fallback: false,
  };
};
