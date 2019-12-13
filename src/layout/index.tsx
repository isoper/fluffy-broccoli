import React from "react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/core";

import config from "../../data/SiteConfig";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface MainLayoutProps {
  data: any;
}

export default class MainLayout extends React.Component {
  constructor(props: MainLayoutProps, context: any) {
    super(props, context);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Global
          styles={css`
            a {
              color: unset;
              text-decoration: unset;
            }
            img.emoji {
              height: 1em;
              width: 1em;
              margin: 0 0.05em 0 0.1em;
              vertical-align: -0.1em;
            }
          `}
        />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <NavBar data={this.props.data} />
        {children}
        <Footer data={this.props.data} />
      </div>
    );
  }
}
