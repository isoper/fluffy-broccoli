import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import Container from "./../../components/Container";
import waveIllustration from "./wave.svg";
import Title from "./../../components/Title";

interface WhereAreWeProps {
  title: string;
  content: string;
  map: string;
}

export default class extends React.Component<WhereAreWeProps, {}> {
  constructor(props: WhereAreWeProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("120px")};
    `;

    const Img = styled(_Img)`
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 80%;
        margin: auto;
      }
    `;

    const Content = styled("div")`
      opacity: 0.85;
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 50%;
      }
    `;
    
    const Location = styled("h2")`
      color: ${colors.darkBlue};
      font-size: 28px;
    `

    const { content, title, map } = this.props;
    return (
      <Section>
        <>
          <Container>
            <Title primary color={`${colors.darkBlue}`}>
              {title}
            </Title>
            <Location>Gevgelija, Macedonia</Location>
            <Content>
              Why Gevgelija? Because it offers sunny weather, proximity to
              nature and has a strong sense of community. Above all, traffic jam
              isn't a concern as you can go to work on foot and save a serious
              amount of money as the cost of living is 30% cheaper than in
              Skopje! The city is surrounded by really cool point of interest so
              you can enjoy your weekends with family or friends.
            </Content>
          </Container>
        </>
        {/* <Img fluid={map} /> */}
      </Section>
    );
  }
}
