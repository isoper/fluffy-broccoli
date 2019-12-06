import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { navigateTo } from "gatsby-link";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import Title from "./../../components/Title";
import Container from "./../../components/Container";
import _Input from "./../../components/Input";

interface GetInTouchProps {}
interface GetInTouchState {
  name: string;
  email: string;
  content: string;
}

const Section = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: ${rem("90px")};
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
`;

const Input = styled(_Input)`
  margin: ${rem("15px")} 0;
`;

const Form = styled("form")`
  height: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  ${mq[0]} {
    width: 100%;
  }
  ${mq[1]} {
    width: 600px;
  }
`;

const Button = styled(_Button)`
  margin-top: 20px;
  ${mq[0]} {
    align-self: center;
  }
  ${mq[1]} {
    align-self: flex-start;
  }
`;

export default class extends React.Component<GetInTouchProps, GetInTouchState> {
  constructor(props: GetInTouchProps, context: any) {
    super(props, context);
    this.state = {
      name: "",
      email: "",
      content: ""
    };
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  public render() {
    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            Get in touch!
          </Title>
          <p>Leave us a message and we'll get back to you!</p>
          <Form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <Input
              type="text"
              name="name"
              placeholder="What is your name?"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Input
              type="email"
              name="email"
              placeholder="What is your email?"
              onChange={e => this.handleChange(e)}
              value={this.state.email}
            />
            <Input
              type="text"
              name="content"
              placeholder="How can we help you?"
              area
              onChange={this.handleChange}
              value={this.state.content}
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
