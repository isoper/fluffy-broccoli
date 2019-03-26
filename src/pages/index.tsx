import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import Header from "../components/Header";
import Methodology from "../components/Methodology";
import { query as methodologyQuery } from "../components/Methodology";
import WhoIs from "../components/WhoIs";
import Ethos from "../components/Ethos";
import GetInTouch from "../components/GetInTouch";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <Header />
          <Methodology data={this.props.data} />
          <WhoIs />
          <Ethos data={this.props.data} />
          <GetInTouch />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    continuousLearning: file(relativePath: { eq: "continuous_learning.png" }) {
      childImageSharp {
        fixed(width: 260, height: 280) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    leadership: file(relativePath: { eq: "leadership.png" }) {
      childImageSharp {
        fixed(width: 330, height: 420) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    topTalent: file(relativePath: { eq: "top_talent.png" }) {
      childImageSharp {
        fixed(width: 290, height: 280) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    build: file(relativePath: { eq: "build.png" }) {
      childImageSharp {
        fixed(width: 330, height: 420) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    innovate: file(relativePath: { eq: "innovate.png" }) {
      childImageSharp {
        fixed(width: 210, height: 230) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    run: file(relativePath: { eq: "run.png" }) {
      childImageSharp {
        fixed(width: 210, height: 230) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
