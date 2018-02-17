import React, { Component } from "react";
import Img from "gatsby-image";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { postNode, mobile } = this.props;
    /* eslint no-undef: "off"*/
    const coverHeight = mobile ? 180 : 350;
    return (
      <div
        style={{ height: `${coverHeight}px` }}
        className="md-grid md-cell--9 post-cover"
      >
        <Img outerWrapperClassName="cover_image_wrapper" style={{width: "100%"}} sizes={postNode.frontmatter.cover.childImageSharp.sizes} />
      </div>
    );
  }
}

export default PostCover;
