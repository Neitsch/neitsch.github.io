import PostPreview from "../components/post-preview";
import { styled } from "@mui/material/styles";
import type { MoreStoriesFragment } from "../generated/graphql";
import { POST_PREVIEW_FRAGMENT } from "./post-preview";
import { Typography, Paper } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import gql from "graphql-tag";
import * as React from "react";

export const MORE_STORIES = gql`
  ${POST_PREVIEW_FRAGMENT}
  fragment MoreStories on Query {
    moreStories: posts(
      orderBy: date_DESC
      first: 2
      where: { slug_not_in: [$slug] }
    ) {
      ...PostPreview
    }
  }
`;
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function MoreStories({
  moreStories,
}: MoreStoriesFragment): JSX.Element {
  return (
    <div>
      <Typography variant="h4">More Stories</Typography>
      <Masonry columns={{ xs: 1, sm: 2 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
        {moreStories.map((post) => (
          <Item key={post.slug}>
            <PostPreview post={post} />
          </Item>
        ))}
      </Masonry>
    </div>
  );
}
