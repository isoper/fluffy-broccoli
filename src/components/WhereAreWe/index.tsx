import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import _Container from "./../../components/Container";
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
      padding-top: ${rem("120px")};
      & h1 {
        font-size: ${rem("36px")};
      }
    `;

    const Container = styled(_Container)`
      display: flex;
      ${mq[0]} {
        flex-direction: column;
      }
      ${mq[2]} {
        flex-direction: row;
      }
    `

    const Img = styled(_Img)`
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 60% !important;
        height: 60% !important;
        margin: auto;
      }
    `;

    const Content = styled("div")`
      opacity: 0.85;
      line-height: 1.94;
      font-size: ${rem("16px")};
      ${mq[2]} {
        width: 80%;
      }
    `;
    
    const Location = styled("h2")`
      color: ${colors.darkBlue};
      font-size: ${rem("20px")};
    `;

    const LocationGrid = styled("div")`
      display: flex;
      flex-direction: column;
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 65%;
        margin-right: 10px;
      }
    `;

    const { content, title, map } = this.props;
    return (
      <Section>
        <Container>
          <LocationGrid>
            <Title primary color={`${colors.darkBlue}`}>
              {title}
            </Title>
            <Location>Gevgelija, Macedonia</Location>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
          </LocationGrid>
          <Img fluid={map} />
        </Container>
      </Section>
    );
  }
}
