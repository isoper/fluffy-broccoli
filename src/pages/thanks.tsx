import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

import { colors, mq } from "../utils/theme";
import Layout from "../layout";
import _Container from "../components/Container";

const ThanksPage = ({ data }) => {
  const Container = styled(_Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mq[0]} {
      padding-top: 6rem;
    }
    ${mq[2]} {
      padding-top: 0rem;
    }
  `;

  const Section = styled("section")`
    display: flex;
    color: white;
    ${mq[0]} {
      padding-top: 0;
      & h1 {
        font-size: ${rem("26px")};
        font-weight: normal;
        margin-bottom: 0;
        padding-left: 0 !important;
        height: 57px !important;
      }
      & p {
        font-size: ${rem("14px")};
        opacity: 0.85;
      }
    }
    padding-top: ${rem("40px")};
    ${mq[1]} {
      & h1 {
        font-size: ${rem("42px")};
        letter-spacing: 1.55px;
        height: 77px !important;
      }
    }
    ${mq[2]} {
      align-items: center;
      padding-top: ${rem("90px")};
    }
    min-height: 100vh;
    background: linear-gradient(180deg, ${colors.darkBlue}, ${colors.blue});
  `;
  return (
    <Layout data={data}>
      <Section>
        <Container>
          <h1>Thank you!</h1>
          <p>We'll get back to you as soon as possible.</p>
        </Container>
      </Section>
    </Layout>
  );
};

export default ThanksPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ThanksQuery {
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
