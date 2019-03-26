import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";

import { colors } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";

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
      display: flex;
      align-items: center;
      text-transform: uppercase;
      color: ${colors.accent};
      font-weight: bold;
      cursor: pointer;
    `;

    const FaArrowRight = styled(_FaArrowRight)`
      margin: 0 0.5rem;
    `;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            Who is LUDŌ?
          </Title>
          <Content>
            <p>
              Ludo is a development agency helping partners scaling their teams
              on demand. Whenever you have a problem, we provide you a
              tailor-made teams.
              <br />
              As a partner building long-term relationship We are driven by your
              success. Our strong culture of continuous learning allow us to
              stay ahead of the technological curve.
              <br />
              Our Software craftsmanship experts can turn any of your dream into
              reality.
            </p>
          </Content>
          <TeamLink>
            Our team & jobs <FaArrowRight />
          </TeamLink>
        </Container>
      </Section>
    );
  }
}
