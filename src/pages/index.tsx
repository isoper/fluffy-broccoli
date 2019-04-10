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

const parseData = (data, title) => {
  const item = data.allHomeJson.edges.find(item => item.node.title === title)
    .node;
  return {
    title: item.title,
    image: item.image.childImageSharp.fixed,
    content: item.content.childMarkdownRemark.html
  };
};

const Index = ({ data }) => {
  const build = parseData(data, "build");
  const run = parseData(data, "run");
  const innovate = parseData(data, "innovate");
  const learning = parseData(data, "learning");
  const leadership = parseData(data, "leadership");
  const talent = parseData(data, "talent");

  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Header data={data} />
        <div id="our-services">
          <Methodology run={run} build={build} innovate={innovate} />
        </div>
        <WhoIs />
        <div id="ethos">
          <Ethos learning={learning} talent={talent} leadership={leadership} />
        </div>
        <GetInTouch />
      </div>
    </Layout>
  );
};

export default Index;
/* eslint no-undef: "off" */
export const HomeFragment = graphql`
  fragment HomeFragment on HomeJson {
    content {
      childMarkdownRemark {
        html
      }
    }
    title
    image {
      childImageSharp {
        fixed(width: 330) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allHomeJson {
      edges {
        node {
          ...HomeFragment
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
