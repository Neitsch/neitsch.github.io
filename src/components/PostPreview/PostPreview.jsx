import {graphql} from 'gatsby';
import Img from "gatsby-image";
import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostTags from "../PostTags/PostTags";
import "./PostPreview.scss";

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.fields.slug} raise className="md-grid md-cell md-cell--12">
        <Link style={{ textDecoration: "none" }} to={postInfo.fields.slug}>
          <Media
            style={{
              height: `${coverHeight}px`
            }}
            className="post-preview-cover"
          >
            <Img sizes={postInfo.frontmatter.cover.childImageSharp.sizes} />
            <MediaOverlay>
              <CardTitle title={postInfo.frontmatter.title}>
                <Button raised secondary className="md-cell--right">
                  Read
                </Button>
              </CardTitle>
            </MediaOverlay>
          </Media>
        </Link>
        <CardTitle
          expander={expand}
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Published on ${postInfo.frontmatter.date}`}
          subtitle={`${postInfo.timeToRead} min read`}
        />

        <CardText expandable={expand}>
          {postInfo.excerpt}
          <PostTags postNode={postInfo} />
        </CardText>
      </Card>
    );
  }
}

export default PostPreview;

export const query = graphql`
  fragment PostPreviewFragment on MarkdownRemark {
    ...PostTagsFragment
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
          fluid {
            src
          }
        }
      }
      date
    }
  }
`;
