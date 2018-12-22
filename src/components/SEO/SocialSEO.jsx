import React, { Component } from "react";
import SEO from './SEO';
import config from "../../../data/SiteConfig";

class SocialSEO extends Component {
  render() {
    return (
      <React.Fragment>
        <SEO
          addiitionalJsonLD={[{
            "@context" : "http://schema.org",
            "@type" : "Person",
            "name" : config.userName,
            "url" : config.siteUrl,
            "sameAs" : config.userLinks.filter(
              linkInfo => !!linkInfo.external
            ).map(
              linkInfo => linkInfo.url
            ),
          }]}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

export default SocialSEO;
