import { HeroPostFragment } from "../generated/graphql";
import {
  Card,
  Box,
  Chip,
  Avatar,
  Link as MuiLink,
  Typography,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import gql from "graphql-tag";
import Link from "next/link";

export const HERO_POST_FRAGMENT = gql`
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

export default function HeroPost({
  title,
  coverImage,
  author,
  slug,
  excerpt,
}: HeroPostFragment): JSX.Element {
  return (
    <Card>
      <CardMedia component="img" src={coverImage?.url} />
      <CardContent>
        <CardActionArea>
          <Link href={`/posts/${slug}`} passHref>
            <MuiLink>
              <Box display="flex">
                <Box flexGrow={1}>
                  <Typography variant="h4">{title}</Typography>
                </Box>
                {author ? (
                  <Box alignSelf="flex-end">
                    <Chip
                      avatar={
                        <Avatar alt={author.name} src={author.picture?.url} />
                      }
                      label={author.name ?? "Anonymous"}
                    />
                  </Box>
                ) : null}
              </Box>
              <Typography variant="body1">{excerpt}</Typography>
            </MuiLink>
          </Link>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
