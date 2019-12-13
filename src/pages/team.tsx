import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import Header from "../components/Header";
import Team from "../components/Team";
import WhereAreWe from "../components/WhereAreWe";
import JobsCard from "../components/JobCards";

const TeamPage = ({ data }) => {
  const profiles = [];
  data.allProfilesJson.edges.forEach((item) => {
    profiles.push({
      ...item.node,
      bio: item.node.bio.childMarkdownRemark.html,
      picture: item.node.picture.childImageSharp.fixed
    });
  });
  const whereAreWe = data.teamJson.where.childMarkdownRemark.html;
  const map = data.teamJson.map.childImageSharp.fluid;
  const bannerLogo = data.bannerLogo.childImageSharp.fluid;
  const jobs = data.teamJson.jobs;
  const teamText = data.teamJson.teamText.childMarkdownRemark.html;
  const headerText = data.teamJson.headerText.childMarkdownRemark.html;

  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={"LUDO Team"} />
        <Header team bannerLogo={bannerLogo} title={"The story of Ludō"} headerText={headerText} />
        <div id="core-team">
          <Team profiles={profiles} title="Core Team" teamText={teamText} />
        </div>
        <WhereAreWe title="Where are we?" content={whereAreWe} map={map} />
        <JobsCard jobs={jobs} />
      </div>
    </Layout>
  );
};

export default TeamPage;

/* eslint no-undef: "off" */
export const ProfileFrahment = graphql`
  fragment ProfileFragment on ProfilesJson {
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
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TeamQuery {
    allProfilesJson {
      edges {
        node {
          ...ProfileFragment
        }
      }
    }
    teamJson {
      headerText {
        childMarkdownRemark {
          html
        }
      }
      where {
        childMarkdownRemark {
          html
        }
      }
      map {
        childImageSharp {
          fluid(maxHeight: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teamText { 
        childMarkdownRemark {
          html
        }
      }
      jobs {
        title
        location
        content
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
