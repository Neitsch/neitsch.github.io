import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import Layout from "../components/layout";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <div className="tag-container">
          <Helmet>
            <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
          </Helmet>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
