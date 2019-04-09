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

const Index = ({ data }) => {
  data.allHomeJson.edges.forEach(item => {
    item.node.image = item.node.image.childImageSharp.fixed;
    item.node.content = item.node.content.childMarkdownRemark.html;
  });
  const build = data.allHomeJson.edges.find(item => item.node.title === "build")
    .node;

  const run = data.allHomeJson.edges.find(item => item.node.title === "run")
    .node;

  const innovate = data.allHomeJson.edges.find(
    item => item.node.title === "innovate"
  ).node;

  const learning = data.allHomeJson.edges.find(
    item => item.node.title === "learning"
  ).node;

  const leadership = data.allHomeJson.edges.find(
    item => item.node.title === "leadership"
  ).node;

  const talent = data.allHomeJson.edges.find(
    item => item.node.title === "talent"
  ).node;

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
