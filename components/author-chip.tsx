import type { AuthorChipFragment } from "../generated/graphql";
import { Chip, Avatar } from "@mui/material";
import gql from "graphql-tag";
import Link from "next/link";

export const AUTHOR_CHIP_FRAGMENT = gql`
  fragment AuthorChip on Author {
    name
    slug
    picture {
      url(
        transformation: {
          image: { resize: { fit: crop, width: 100, height: 100 } }
        }
      )
    }
  }
`;
export default function AuthorChip({
  author,
}: {
  author: AuthorChipFragment;
}): JSX.Element {
  return (
    <Link href={`/author/${author.slug}`} passHref>
      <Chip
        avatar={<Avatar alt={author.name} src={author.picture?.url} />}
        clickable
        label={author.name}
      />
    </Link>
  );
}
