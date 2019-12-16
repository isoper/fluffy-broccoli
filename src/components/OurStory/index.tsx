import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";

interface OurStoryProps {
  content: string;
}

export default class extends React.Component<OurStoryProps, {}> {
  constructor(props: OurStoryProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding: ${rem("90px")} 0;
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
      background-image: linear-gradient(
        180deg,
        ${colors.secondary},
        ${colors.secondaryDark}
      );
      color: white;
    `;

    const Content = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      width: 100%;
    `;

    const Signature = styled("span")`
      opacity: 0.5;
    `;
    const { content } = this.props;

    return (
      <Section>
        <Container>
          <Title primary>Our Story</Title>
          <Content>
            <p dangerouslySetInnerHTML={{ __html: content }} />
            <Signature>David Cuklevski, CEO & Co-Founder</Signature>
          </Content>
        </Container>
      </Section>
    );
  }
}
