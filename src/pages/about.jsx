import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import Layout from "../components/layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
