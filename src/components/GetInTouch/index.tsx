import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";
import Button from "./../Button";
import Title from "./../../components/Title";
import Container from "./../../components/Container";
import Input from "./../../components/Input";

interface GetInTouchProps {}

export default class extends React.Component<GetInTouchProps, {}> {
  constructor(props: GetInTouchProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("90px")};
    `;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            Get in touch!
          </Title>
          <p>Pretty bs shouldn't excite youuuuu!</p>
          <Input placeholder={"What is your name?"} />
          <Input placeholder={"How can we help you?"} />
          <Button>Work with us</Button>
        </Container>
      </Section>
    );
  }
}
