import React from "react";
import { graphql } from "gatsby";
import PostPreview from "../PostPreview/PostPreview";

class PostListing extends React.Component {
  render() {
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--8 mobile-fix">
          {this.props.queryData.edges.map(post => (
            <PostPreview key={post.node.id} postInfo={post.node} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostListing;


export const query = graphql`
  fragment PostListingFragment on MarkdownRemarkConnection {
    edges {
      node {
        id
        ...PostPreviewFragment
      }
    }
  }
`;
