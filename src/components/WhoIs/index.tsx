import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";
import Title from "./../../components/Title";
import { FaArrowRight } from "react-icons/fa";

interface WhoIsProps {}

export default class extends React.Component<WhoIsProps, {}> {
  constructor(props: WhoIsProps, context: any) {
    super(props, context);
  }
  public render() {
    const Container = styled("div")`
      display: flex;
      flex-direction: column;
      height: ${rem("768px")};
      padding: ${rem("40px")} ${rem("100px")};
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
      <Container>
        <Title content={"Who is LUDŌ?"} primary={true} color={"black"} />
        <Content>Lorem ipsum</Content>
        <TeamLink>Our team & jobs</TeamLink>
      </Container>
    );
  }
}
