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
    }
    ${mq[2]} {
      align-items: center;
      padding-top: ${rem("90px")};
    }
    min-height: 100vh;
    background: linear-gradient(
      180deg,
      rgba(47, 70, 82, 1) 0%,
      rgba(75, 114, 134, 1) 100%
    );
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
