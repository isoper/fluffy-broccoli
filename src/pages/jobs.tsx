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

  return (
    <Layout>
      <div className="index-container">
      </div>
    </Layout>
  );
};

export default JobsPage;

