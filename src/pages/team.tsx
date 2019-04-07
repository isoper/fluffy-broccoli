import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import OurStory from "../components/OurStory";
import Team from "../components/Team";

export default class TeamPage extends React.Component {
  render() {
    return (
      <Layout data={this.props.data}>
        <div className="index-container">
          <Helmet title={"LUDO Team"} />
          <OurStory />
          <Team data={this.props.data} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TeamQuery {
    brunoProfile: file(relativePath: { eq: "bruno_profile.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
