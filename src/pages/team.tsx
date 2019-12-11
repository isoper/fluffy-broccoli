import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import OurStory from "../components/OurStory";
import Header from "../components/Header";
import Team from "../components/Team";
import WhereAreWe from "../components/WhereAreWe";
import JobsCard from "../components/JobCards";
import Footer from "../components/Footer";

const TeamPage = ({ data }) => {
  const profiles = [];
  data.allProfilesJson.edges.forEach((item, index, array) => {
    profiles.push({
      ...item.node,
      bio: item.node.bio.childMarkdownRemark.html,
      picture: item.node.picture.childImageSharp.fixed
    });
  });
  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={"LUDO Team"} />
        {/* <OurStory content={ourStory} /> */}
        <Header />
        <Team profiles={profiles} />
        <WhereAreWe title="Where are we?" />
        <JobsCard />
        <Footer />
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
  query TeamQuery {
    allProfilesJson {
      edges {
        node {
          ...ProfileFragment
        }
      }
    }
    teamJson {
      content {
        childMarkdownRemark {
          html
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
