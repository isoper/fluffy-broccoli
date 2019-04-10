import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import Container from "./../../components/Container";
import waveIllustration from "./wave.svg";
import Title from "./../../components/Title";

interface OurOfferProps {
  title: string;
  content: string;
}

export default class extends React.Component<OurOfferProps, {}> {
  constructor(props: OurOfferProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("70px")};
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    `;

    const Content = styled("div")``;

    const { content, title } = this.props;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            {title}
          </Title>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
      </Section>
    );
  }
}
