import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowDown } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import Button from "./../Button";
import _Container from "./../../components/Container";

interface HeaderProps {}

export default class extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      ${mq[0]} {
        padding-top: 6rem;
      }
      ${mq[2]} {
        align-items: center;
      }
      min-height: 80vh;
      padding-top: ${rem("90px")};
      background-image: linear-gradient(
        153deg,
        ${colors.primary} 0%,
        ${colors.secondary} 100%
      );
    `;

    const Container = styled(_Container)`
      display: flex;
      flex-direction: column;
      ${mq[0]} {
        padding-top: 6rem;
        align-items: center;
      }
      ${mq[2]} {
        align-items: start;
      }
    `;

    const HeaderText = styled("div")`
      display: flex;
      flex-direction: column;
      ${mq[0]} {
        text-align: center;
      }
      ${mq[2]} {
        text-align: left;
      }
    `;

    const Motto = styled("div")`
      & h1 {
        font-size: 5rem;
      }
      & p {
        font-size: 2rem;
      }
      & h1,
      p {
        color: white;
      }
    `;

    const MoreButton = styled("div")`
      margin: 0 auto;
      margin-top: ${rem("90px")};
      color: white;
      font-size: 25px;
      padding-left: 8px;
      padding-top: 5px;
      width: 50px;
      height: 50px;
      opacity: 0.8;
      background-color: rgba(0, 0, 0, 0.6);
      background-clip: padding-box;
      border: 4px solid rgba(0, 0, 0, 0.3);
      border-radius: 25px;
      cursor: pointer;
    `;

    return (
      <Section>
        <Container>
          <HeaderText>
            <Motto>
              <h1>A tech team that flows</h1>
              <p>
                Focus on your business, we scale your team up on demand. We are
                your partner in technology.
              </p>
            </Motto>
          </HeaderText>
          <Button primary>Work with us</Button>
          <MoreButton>
            <FaArrowDown />
          </MoreButton>
        </Container>
      </Section>
    );
  }
}
