import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
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
      text-align: center;
    `;

    const Motto = styled("div")`
      color: white;
      ${mq[0]} {
        & h1 {
          font-size: 2.5rem;
        }
        & p {
          font-size: 1.3rem;
        }
      }
      ${mq[2]} {
        & h1 {
          font-size: 4rem;
        }
        & p {
          font-size: 1.5rem;
        }
      }
      & h1,
      p {
        margin-bottom: 0px;
      }
    `;

    const Button = styled(_Button)`
      margin: 55px 0;
    `;

    const ButtonContent = styled("div")`
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 120%;
    `;

    const MoreButton = styled("div")`
      margin: 0 auto;
      margin-top: ${rem("45px")};
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
