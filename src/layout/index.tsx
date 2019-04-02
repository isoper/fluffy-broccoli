import React from "react";
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";
import NavBar from "../components/NavBar";

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
        <NavBar data={this.props.data} />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
