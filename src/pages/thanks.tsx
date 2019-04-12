import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../layout";

const ThanksPage = ({ data }) => {
  return (
    <Layout data={data}>
      <h1>Thank you!</h1>
      <p>We'll get back to you as soon as possible.</p>
    </Layout>
  );
};

export default ThanksPage;
