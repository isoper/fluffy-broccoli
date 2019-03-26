import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

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
        padding-top: 0;
      }
      ${mq[2]} {
        align-items: center;
        padding-top: ${rem("90px")};
      }
      min-height: 80vh;
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
        font-size: 4rem;
      }
      & p {
        font-size: 1.5rem;
      }
      & h1,
      p {
        color: white;
      }
    `;

    const ButtonContent = styled("div")`
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 120%;
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
              <h1>A tech team with unrivalled skills</h1>
              <p>Focus on your business, we scale your team on demand.</p>
            </Motto>
          </HeaderText>
          <Button primary>
            <ButtonContent>
              Work with us
              <FaArrowRight />
            </ButtonContent>
          </Button>
          <MoreButton>
            <FaArrowDown />
          </MoreButton>
        </Container>
      </Section>
    );
  }
}
