import React, { Component } from "react";
import SEO from './SEO';
import config from "../../../data/SiteConfig";

class PostSEO extends Component {
  render() {
    const { postNode, postPath } = this.props;
    const {frontmatter: {title, excerpt: description, cover}} = postNode;
    const postURL = config.siteUrl + config.pathPrefix + postPath;
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const image = config.siteUrl + realPrefix + cover;
    const blogURL = config.siteUrl + config.pathPrefix;
    return (
      <React.Fragment>
        <SEO
          addiitionalJsonLD={[{
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description,
        }]}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

export default PostSEO;
