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
    return (
      <Layout data={this.props.data}>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <Header data={this.props.data} />
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
    continuousLearning: file(relativePath: { eq: "continuous_learning.png" }) {
      childImageSharp {
        fixed(width: 260) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    leadership: file(relativePath: { eq: "leadership.png" }) {
      childImageSharp {
        fixed(width: 330) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    topTalent: file(relativePath: { eq: "top_talent.png" }) {
      childImageSharp {
        fixed(width: 290) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    build: file(relativePath: { eq: "build.png" }) {
      childImageSharp {
        fixed(width: 330) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    innovate: file(relativePath: { eq: "innovate.png" }) {
      childImageSharp {
        fixed(width: 330) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    run: file(relativePath: { eq: "run.png" }) {
      childImageSharp {
        fixed(width: 330) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 200) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
