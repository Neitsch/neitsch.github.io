import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const copyright = config.copyright;
    const fixedFooter = config.fixedFooter;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>

          <div className="rss">
            <Link to={url}>
              <Button flat secondary iconClassName="fa fa-rss">
                Subscribe
              </Button>
            </Link>
          </div>
          <div className="based-on">
            <h4>
              Thank you to <a href="https://github.com/Vagr9K">Vagr9K</a> for the theme.
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
