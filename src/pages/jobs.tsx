import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import JobsHeader from "../components/JobsHeader";
import Values from "../components/Values";
import OurOffer from "../components/OurOffer";

const JobsPage = ({ data }) => {
  const values = [];
  data.jobsJson.values.forEach((item, index, array) => {
    values.push({ content: item.content.childMarkdownRemark.html });
  });
  const title = data.jobsJson.title.childMarkdownRemark.html;
  const intro = data.jobsJson.intro.childMarkdownRemark.html;
  const ourOffer = data.jobsJson.offer.childMarkdownRemark.html;
  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={"LUDO Jobs"} />
        <JobsHeader title={title} />
        <Values title={"Our Values"} values={values} intro={intro} />
        <OurOffer title="What do we offer?" content={ourOffer} />
      </div>
    </Layout>
  );
};

export default JobsPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query JobsQuery {
    jobsJson {
      title {
        childMarkdownRemark {
          html
        }
      }
      offer {
        childMarkdownRemark {
          html
        }
      }
      intro {
        childMarkdownRemark {
          html
        }
      }
      values {
        content {
          childMarkdownRemark {
            html
          }
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
