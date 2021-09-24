import type { PostPreviewFragment } from "../generated/graphql";
import AuthorChip, { AUTHOR_CHIP_FRAGMENT } from "./author-chip";
import {
  Card,
  Link as MuiLink,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import gql from "graphql-tag";
import Link from "next/link";

export const POST_PREVIEW_FRAGMENT = gql`
  ${AUTHOR_CHIP_FRAGMENT}
  fragment PostPreview on Post {
    title
    slug
    excerpt
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

export default function PostPreview({
  post: {
    title,

    coverImage,
    excerpt,
    author,
    slug,
  },
}: {
  post: PostPreviewFragment;
}): JSX.Element {
  const titleElem = (
    <Box flexGrow={1}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
  const previewHeader = (
    <Box display="flex">
      {titleElem}
      {author ? (
        <Box alignSelf="flex-end">
          <AuthorChip author={author} />
        </Box>
      ) : null}
    </Box>
  );
  const excerptElem = <Typography variant="body1">{excerpt}</Typography>;
  const innerCardContent = (
    <>
      {previewHeader}
      {excerptElem}
    </>
  );
  const cardContent = (
    <Link href={`/posts/${slug}`} passHref>
      <MuiLink>{innerCardContent}</MuiLink>
    </Link>
  );
  return (
    <Card>
      <CardMedia component="img" src={coverImage?.url} />

      <CardContent>
        <CardActionArea>{cardContent}</CardActionArea>
      </CardContent>
    </Card>
  );
}
