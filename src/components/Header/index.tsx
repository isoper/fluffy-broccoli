import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import _Container from "./../../components/Container";
import Divider from "../../images/Waves.svg";
import Circles from "../../images/Circles.svg";

interface HeaderProps {
  data: any;
}

export default class extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps, context: any) {
    super(props, context);
  }
  public render() {
    const Wrapper = styled("div")`
      overflow: hidden;
      position: relative;
    `;

    const Section = styled("section")`
      display: flex;
      // flex-direction: column;
      justify-content: center;
      ${mq[0]} {
        align-items: flex-start;
      }
      ${mq[1]} {
        align-items: center;
        padding-top: 0;
      }
      min-height: 100vh;
      background-image: url(${Divider}),
       linear-gradient(
        180deg,
        ${colors.darkBlue},
        ${colors.blue}
      );
      background-repeat: no-repeat;
      background-position: bottom;
    `;

    const Container = styled(_Container)`
      ${mq[0]} {
        padding-top: 5rem;
      }
      ${mq[1]} {
        padding-top: 0rem;
      }
      ${mq[2]} {
        padding-top: 0rem;
      }
    `;

    const HeaderText = styled("div")`
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${mq[0]} {
        width: 100%;
        & h1 {
          font-size: 2.5rem;
        }
        & p {
          font-size: 1.3rem;
        }
      }
      ${mq[2]} {
        width: 650px;
        & h1 {
          font-size: 62px;
          margin-bottom: 20px;
        }
        & p {
          font-size: 18px;
        }
      }
      & p {
        margin-bottom: 0px;
      }
    `;

    const wave = keyframes`
      0% {
          margin-left: 0;
      }
      100% {
          margin-left: -1600px;
      }

      `;

    const swell = keyframes`
      0%, 100% {
          transform: translate3d(0, 25px,0);
      }
      50% {
          transform: translate3d(0,-5px,0);
      }
    `;

    const Button = styled(_Button)`
      margin-top: ${rem("45px")};
      ${mq[0]} {
        margin-bottom: 20px;
      }
    `;

    const ButtonContent = styled("span")`
      position: absolute;
      bottom: 15%;
      ${mq[0]} {
        display: none;
      }
      ${mq[1]} {
        display: block;
      }
    `;

    const MoreButton = styled("div")`
      margin-top: ${rem("45px")};
      margin-bottom: 5px;
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

    const WhiteCircles = styled("div")`
      background: url(${Circles});
      position: absolute;
      width: 50%;
      height: 100%;
      background-repeat: no-repeat;
      right: 9%;
      top: -16%;
    `;

    return (
      <Wrapper>
        <Section>
          <Container>
            <HeaderText>
              <h1>A tech team that flows</h1>
              <p>
                Some text here saying what really matters to the people that
                visit the website so that they can do what they understand what
                Ludo is about and be inspired.
              </p>
              <Button primary>We are hiring</Button>
            </HeaderText>
          </Container>
          <div
            style={{
              width: "586px",
              height: "586px",
              backgroundColor: "black",
              position: "absolute",
              right: "-100px",
              display: "none"
            }}
          ></div>
          <ButtonContent>
            <MoreButton>
              <Link to="/#our-services">
                <FaArrowDown />
              </Link>
            </MoreButton>
          </ButtonContent>
          <WhiteCircles />
        </Section>
        {/* <WaveContainer>
          <Wave />
          <Wave />
        </WaveContainer> */}
      </Wrapper>
    );
  }
}
