import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import _Container from "./../../components/Container";
import waveIllustration from "./wave.svg";

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
      ${mq[0]} {
        padding-top: 0;
      }
      ${mq[2]} {
        align-items: center;
        padding-top: ${rem("90px")};
      }
      min-height: 70vh;
      background: ${colors.darkBlue};
    `;

    const Container = styled(_Container)`
      ${mq[0]} {
        padding-top: 5rem;
      }
      ${mq[1]} {
        padding-top: 8rem;
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
          font-size: 62px;
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

    const WaveContainer = styled("div")`
      height: 226px;
      position: relative;
      background-color: ${colors.darkBlue};
    `;

    const Wave = styled("svg")`
      background: url(${waveIllustration}) repeat-x;
      position: absolute;
      height: 198px;
      width: 6400px;
      animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;

      &:nth-of-type(2) {
        animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
          ${swell} 7s ease -1.25s infinite;
        opacity: 1;
      }
    `;

    const Button = styled(_Button)`
      margin-top: ${rem("45px")};
      ${mq[0]} {
        margin-bottom: 20px;
      }
    `;

    const ButtonContent = styled("span")`
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 120%;
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
            {/* <HeaderText>
              <Motto>
                <h1>A tech team that flows</h1>
                <p>
                  Some text here saying what really matters to the people that
                  visit the website so that they can do what they understand
                  what Ludo is about and be inspired.
                </p>
                <Button primary>We are hiring</Button>
              </Motto>
              <div style={{ flex: "1" }}></div>
              <div
                style={{
                  width: "586px",
                  height: "586px",
                  backgroundColor: "black"
                }}
              ></div>
            </HeaderText>

            <MoreButton>
              <Link to="/#our-services">
                <FaArrowDown />
              </Link>
            </MoreButton> */}
          </Container>
          <div
            style={{
              width: "586px",
              height: "586px",
              backgroundColor: "black",
              position: "absolute",
              right: "-100px",
            }}
          ></div>
        </Section>
        <WaveContainer>
          <Wave />
          <Wave />
        </WaveContainer>
      </Wrapper>
    );
  }
}
