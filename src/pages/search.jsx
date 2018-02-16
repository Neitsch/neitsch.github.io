import React from "react";
import Helmet from "react-helmet";
import TextField from "react-md/lib/TextFields/TextField";
import Card from "react-md/lib/Cards/Card";
import {InstantSearch, Hits} from 'react-instantsearch/dom';
import {connectSearchBox} from 'react-instantsearch/connectors';
import PostPreview from "../components/PostPreview/PostPreview";
import config from "../../data/SiteConfig";

const HitComponent = (props) => (
  <PostPreview
    postInfo={{
      path: props.hit.objectID,
      tags: props.hit.meta.tags,
      cover: props.hit.meta.cover,
      title: props.hit.meta.title,
      date: props.hit.meta.date,
      excerpt: props.hit.excerpt,
      timeToRead: props.hit.timeToRead,
    }}
  />
);

const MySearchBox = connectSearchBox(({currentRefinement, refine}) => (
  <TextField
    style={{paddingLeft: "15px", paddingRight: "15px"}}
    id="floating-center-title"
    label=""
    lineDirection="center"
    placeholder="Type your search"
    value={currentRefinement}
    onChange={e => refine(e)}
    customSize="title"
  />
));

class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <Helmet>
          <title>{`Search | ${config.siteTitle}`}</title>
          <link rel="canonical" href={`${config.siteUrl}/search/`} />
        </Helmet>
        <InstantSearch
          appId="3GOEFLAHC5"
          apiKey="ba273c661b1c33cd54ad27056d166299"
          indexName="page_index"
        >
          <div className="md-grid md-grid--no-spacing md-cell--middle">
            <div className="md-grid md-cell--8 mobile-fix">
              <Card raise className="md-grid md-cell md-cell--12">
                <MySearchBox />
              </Card>
              <Hits hitComponent={HitComponent} />
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Search;
