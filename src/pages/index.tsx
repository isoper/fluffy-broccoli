import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import Header from "../components/Header";
import Methodology from "../components/Methodology";
import WhoIs from "../components/WhoIs";
import Ethos from "../components/Ethos";
import GetInTouch from "../components/GetInTouch";
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
  const profiles = data.allProfilesJson.edges.map(item => {
    return {
      ...item.node,
      bio: item.node.bio.childMarkdownRemark.html,
      picture: item.node.picture.childImageSharp.fixed
    }
  })
  const build = parseData(data, "build");
  const run = parseData(data, "run");
  const innovate = parseData(data, "innovate");
  const learning = parseData(data, "learning");
  const leadership = parseData(data, "leadership");
  const talent = parseData(data, "talent");
  const headerText = parseData(data, "headerText");
  const bannerLogo = data.bannerLogo.childImageSharp.fluid;

  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Header data={data} bannerLogo={bannerLogo} title={"A tech team that flows"} headerText={headerText.content} />
        <div id="our-services">
          <Methodology run={run} build={build} innovate={innovate} />
        </div>
        <WhoIs profiles={profiles} />
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
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export const ProfileFragment = graphql`
  fragment TeamFragment on ProfilesJson {
    name
    position
    linkedin
    twitter
    github
    cloud
    bio {
      childMarkdownRemark {
        html
      }
    }
    picture {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
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
    allProfilesJson {
      edges {
        node {
          ...TeamFragment
        }
      }
    }
    darkLogo: file(relativePath: { eq: "LogoLightBackground.png" }) {
      childImageSharp {
        fixed(width: 120 height: 34) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lightLogo: file(relativePath: { eq: "LogoDarkBackground.png" }) {
      childImageSharp {
        fixed(width: 120 height: 34) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bannerLogo: file(relativePath: { eq: "BannerLogo.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    enFlag: file(relativePath: { eq: "en.png" }) {
      childImageSharp {
        fixed(width: 24 height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    frFlag: file(relativePath: { eq: "fr.png" }) {
      childImageSharp {
        fixed(width: 24 height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mkFlag: file(relativePath: { eq: "mk.png" }) {
      childImageSharp {
        fixed(width: 24 height: 24) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
