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
import WhiteRound from "../../images/WhiteRound.svg";

interface GetInTouchProps {}
interface GetInTouchState {
  name: string;
  email: string;
  content: string;
}

const Section = styled("section")`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  text-align: center;
  padding-top: ${rem("120px")};
  ${mq[3]} {
    padding-top: ${rem("150px")};
  }
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

const TextArea = styled("textarea")`
  display: block;
  margin: 0;
  height: 20vh;
  padding: 0.8rem 1.6rem;
  width: 100%;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  box-shadow: ${colors.inputBoxShadow};
  outline: none;
  resize: none;
`;

const RoundBorderBottom = styled("div")`
  background-image: url(${WhiteRound});
  position: absolute;
  z-index: 1;
  bottom: -72px;
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  ${mq[3]} {
    height: 106px;
    bottom: -103px;
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
            <TextArea
              type="text"
              name="content"
              placeholder="How can we help you?"
              onChange={this.handleChange}
              value={this.state.content}
            />
            <Button type="submit" primary>
              Work with us
            </Button>
          </Form>
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
