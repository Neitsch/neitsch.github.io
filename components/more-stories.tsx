import PostPreview from "../components/post-preview";
import type { MoreStoriesFragment } from "../generated/graphql";
import { POST_PREVIEW_FRAGMENT } from "./post-preview";
import { Typography } from "@mui/material";
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

export default function MoreStories({
  moreStories,
}: MoreStoriesFragment): JSX.Element {
  return (
    <div>
      <Typography variant="h4">More Stories</Typography>
      <Masonry columns={{ xs: 1, sm: 2 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
        {moreStories.map((post) => (
          <div key={post.slug}>
            <PostPreview post={post} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
