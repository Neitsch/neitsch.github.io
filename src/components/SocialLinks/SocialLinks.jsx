import React, { Component } from "react";
import { Button } from 'react-md';
import { FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton, RedditShareButton, EmailShareButton,
  FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount, RedditShareCount,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon, GooglePlusIcon,
  LinkedinIcon, RedditIcon, EmailIcon } from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nativeShare: false,
    }
  }

  componentDidMount() {
    if("share" in window.navigator) {
      this.setState({
        nativeShare: true,
      })
    }
  }

  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;

    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    if(this.state.nativeShare) {
      return (
        <div className="social-links">
          <Button
            onClick={() => navigator.share({
              title: post.title,
              text: postNode.excerpt,
              url,
            })}
            secondary
            swapTheming
            flat
          >
Share
          </Button>
        </div>
      );
    }
    return (
      <div className="social-links">
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton
          url={url}
          quote={postNode.excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
        <EmailShareButton url={url} subject={post.title}>
          <EmailIcon round size={iconSize} />
        </EmailShareButton>
      </div>
    );
  }
}

export default SocialLinks;
