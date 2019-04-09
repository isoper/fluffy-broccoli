import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import OurStory from "../components/OurStory";
import Team from "../components/Team";

const TeamPage = ({ data }) => {
  data.allProfilesJson.edges.forEach((item, index, array) => {
    item = item.node;
    item.picture = item.picture.childImageSharp.fixed;
    item.bio = item.bio.childMarkdownRemark.html;
    /* Skip node level */
    array[index] = item;
  });
  const profiles = data.allProfilesJson.edges;
  const ourStory = data.teamJson.content.childMarkdownRemark.html;
  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={"LUDO Team"} />
        <OurStory content={ourStory} />
        <Team profiles={profiles} />
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
