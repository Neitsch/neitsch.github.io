import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";
import Chip from "react-md/lib/Chips";
import "./PostTags.scss";
import {graphql} from 'gatsby';

class PostTags extends Component {
  render() {
    const { postNode } = this.props;
    return (
      <div className="post-tag-container">
        {postNode.frontmatter.tags &&
          postNode.frontmatter.tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <Chip label={tag} className="post-preview-tags" />
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;

export const query = graphql`
  fragment PostTagsFragment on MarkdownRemark {
    frontmatter {
      tags
    }
  }
`;
