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

    const Form = styled("form")`
      height: 20rem;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    `;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            Get in touch!
          </Title>
          <p>
            Fill our contact form and we will contact you back as soon as
            possible.
          </p>
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Input type="text" name="name" placeholder={"What is your name?"} />
            <Input
              type="email"
              name="email"
              placeholder={"What is your email?"}
            />
            <Input
              type="text"
              name="content"
              placeholder={"How can we help you?"}
              area
            />
            <Button type="submit" primary>
              Work with us
            </Button>
          </Form>
        </Container>
      </Section>
    );
  }
}
