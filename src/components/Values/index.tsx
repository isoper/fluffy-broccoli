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

interface ValuesProps {
  title: string;
  intro: string;
  values: { content: string }[];
}

export default class extends React.Component<ValuesProps, {}> {
  constructor(props: ValuesProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("50px")};
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    `;

    const Intro = styled("div")`
      padding-bottom: ${rem("15px")};
    `;

    const Content = styled("div")`
      blockquote {
        border-left: 5px #c5c5c5 solid;
        padding-left: 1.666rem;
        margin-left: 0px;
      }
    `;

    const { values, title, intro } = this.props;

    return (
      <Section>
        <Container>
          <Intro dangerouslySetInnerHTML={{ __html: intro }} />
          <Title primary color={"black"}>
            {title}
          </Title>
          {values.map(value => {
            return (
              <Content dangerouslySetInnerHTML={{ __html: value.content }} />
            );
          })}
        </Container>
      </Section>
    );
  }
}
