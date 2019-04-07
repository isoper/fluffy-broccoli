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

interface OurStoryProps {
  data: any;
}

export default class extends React.Component<OurStoryProps, {}> {
  constructor(props: OurStoryProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("90px")};
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
      background-image: linear-gradient(
        180deg,
        ${colors.secondary} 0%,
        ${colors.secondaryDark} 100%
      );
      color: white;
    `;

    const Content = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
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
          <Title primary>Our Story</Title>
          <Content>
            <p>bla bla bla</p>
          </Content>
        </Container>
      </Section>
    );
  }
}
