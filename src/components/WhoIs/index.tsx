import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import { FaArrowRight } from "react-icons/fa";

interface WhoIsProps {}

export default class extends React.Component<WhoIsProps, {}> {
  constructor(props: WhoIsProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("150px")};
      padding-bottom: ${rem("80px")};
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    `;

    const Content = styled("p")``;

    const TeamLink = styled("a")`
      text-transform: uppercase;
      color: ${colors.accent};
      font-weight: bold;
      cursor: pointer;
    `;

    return (
      <Section>
        <Container>
          <Title primary={true} color={"black"}>
            Who is LUDŌ?
          </Title>
          <Content>Lorem ipsum</Content>
          <TeamLink>Our team & jobs</TeamLink>
        </Container>
      </Section>
    );
  }
}
