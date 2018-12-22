import React, { Component } from "react";
import SEO from './SEO';
import config from "../../../data/SiteConfig";

class BlogSEO extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO
          addiitionalJsonLD={[{
            "@context" : "http://schema.org",
            "@type" : "Blog",
            "about" : config.siteDescription,
            "url": config.siteUrl + config.pathPrefix,
            "blogPost": this.props.postEdges.map(post => ({
              "@context": "http://schema.org",
              "@type": "BlogPosting",
              url: config.siteUrl + (config.pathPrefix === "/" ? "" : config.pathPrefix) + post.node.fields.slug,
              name: post.node.frontmatter.title,
              headline: post.node.frontmatter.title,
              image: {
                "@type": "ImageObject",
                url: config.siteUrl + (config.pathPrefix === "/" ? "" : config.pathPrefix) + post.node.frontmatter.cover.childImageSharp.fluid.src
              },
              description: post.node.excerpt,
            }))
          }]}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

export default BlogSEO;
