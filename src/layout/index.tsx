import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import { Global, css } from "@emotion/core";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Global
          styles={css`
            * {
              font-family: "Montserrat", sans-serif;
            }
            h1 h2 {
              font-family: "Secular One", sans-serif;
            }
          `}
        />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
