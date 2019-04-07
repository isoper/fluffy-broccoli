import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import startup from "./../../images/startups.svg";
import sme from "./../../images/sme.svg";
import corporates from "./../../images/corporates.svg";
import Profile from "./../../components/Profile";

interface TeamProps {
  data: any;
}

export default class extends React.Component<TeamProps, {}> {
  constructor(props: TeamProps, context: any) {
    super(props, context);
  }
  public render() {
    const DavidDescription =
      "I come from a strong background in economics & finance at the Sorbonne University (Paris) and specialized in corporate finance at the Em Lyon business school. I am a naturally curious individual keen to learn. I went through almost all branches of Finance; finance consulting, transaction advisory service in mergers & acquisitions, asset management and mid-caps private equity fund.";
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("90px")};
    `;

    const Content = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 65%;
      }
    `;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            The Team
          </Title>
          <Content>bla bla bla</Content>
          <Profile
            name={"David Cuklevski"}
            position={"CEO"}
            description={DavidDescription}
            picture={this.props.data.brunoProfile.childImageSharp.fixed}
          />
          <Profile
            name={"Bruno Pereira"}
            position={"CTO"}
            description={"Bla bla bla"}
            picture={this.props.data.brunoProfile.childImageSharp.fixed}
          />
        </Container>
      </Section>
    );
  }
}
