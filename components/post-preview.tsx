import type { PostPreviewFragment } from "../generated/graphql";
import {
  Card,
  Avatar,
  Link as MuiLink,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Chip,
} from "@material-ui/core";
import gql from "graphql-tag";
import Link from "next/link";

export const POST_PREVIEW_FRAGMENT = gql`
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
      name
      picture {
        url(
          transformation: {
            image: { resize: { width: 100, height: 100, fit: crop } }
          }
        )
      }
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
          <Chip
            avatar={<Avatar alt={author.name} src={author.picture?.url} />}
            label={author.name}
          />
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
