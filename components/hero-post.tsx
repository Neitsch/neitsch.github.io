import type { HeroPostFragment } from "../generated/graphql";
import AuthorChip, { AUTHOR_CHIP_FRAGMENT } from "./author-chip";
import {
  Card,
  Box,
  Link as MuiLink,
  Typography,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import gql from "graphql-tag";
import Link from "next/link";

export const HERO_POST_FRAGMENT = gql`
  ${AUTHOR_CHIP_FRAGMENT}
  fragment HeroPost on Post {
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

export default function HeroPost({
  post: { title, coverImage, author, slug, excerpt },
}: {
  post: HeroPostFragment;
}): JSX.Element {
  const titleElem = (
    <Box flexGrow={1}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
  const headerElem = (
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
  return (
    <Card>
      <CardMedia component="img" src={coverImage?.url} />
      <CardContent>
        <CardActionArea>
          <Link href={`/posts/${slug}`} passHref>
            <MuiLink>
              {headerElem}

              {excerptElem}
            </MuiLink>
          </Link>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
