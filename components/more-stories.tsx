import PostPreview from "../components/post-preview";
import { MoreStoriesFragment } from "../generated/graphql";
import { POST_PREVIEW_FRAGMENT } from "./post-preview";
import { Typography, Grid } from "@material-ui/core";
import gql from "graphql-tag";

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
      <Grid container spacing={5}>
        {moreStories.map((post) => (
          <Grid item xs={12} md={6} key={post.slug}>
            <PostPreview {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
