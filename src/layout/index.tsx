import React from "react";
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";
import NavBar from "../components/NavBar";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <NavBar />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
