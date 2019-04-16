import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";
import JobsHeader from "../components/JobsHeader";
import Values from "../components/Values";
import OurOffer from "../components/OurOffer";
import WhereAreWe from "../components/WhereAreWe";
import JobsCard from "../components/JobCards";

const JobsPage = ({ data }) => {
  const values = [];
  data.jobsJson.values.forEach((item, index, array) => {
    values.push({ content: item.content.childMarkdownRemark.html });
  });
  const title = data.jobsJson.title.childMarkdownRemark.html;
  const intro = data.jobsJson.intro.childMarkdownRemark.html;
  const ourOffer = data.jobsJson.offer.childMarkdownRemark.html;
  const whereAreWe = data.jobsJson.where.childMarkdownRemark.html;
  const map = data.jobsJson.map.childImageSharp.fluid;
  const jobs = data.jobsJson.jobs;
  return (
    <Layout data={data}>
      <div className="index-container">
        <Helmet title={"LUDO Jobs"} />
        <JobsHeader title={title} />
        <Values title={"Our Values"} values={values} intro={intro} />
        <OurOffer title="What do we offer?" content={ourOffer} />
        <WhereAreWe title="Where are we?" content={whereAreWe} map={map} />
        <JobsCard jobs={jobs} />
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
      where {
        childMarkdownRemark {
          html
        }
      }
      map {
        childImageSharp {
          fluid(maxHeight: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
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
      jobs {
        title
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
