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
      background: linear-gradient(
        180deg,
        rgba(47, 70, 82, 1) 0%,
        rgba(75, 114, 134, 1) 100%
      );
    `;

    const Container = styled(_Container)`
      display: flex;
      flex-direction: column;
      align-items: center;
      ${mq[0]} {
        padding-top: 6rem;
      }
      ${mq[2]} {
        padding-top: 0rem;
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
      background-color: ${colors.secondary};
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
              <Motto>
                <h1>A tech team with unrivalled skills</h1>
                <p>Focus on your business, we scale your team on demand.</p>
              </Motto>
            </HeaderText>
            {/*
                <Button primary>
                    <ButtonContent>
                        Work with us
                        <FaArrowRight />
                    </ButtonContent>
                </Button>
            */}
            <MoreButton>
              <Link to="/#our-services">
                <FaArrowDown />
              </Link>
            </MoreButton>
          </Container>
        </Section>
        <WaveContainer>
          <Wave />
          <Wave />
        </WaveContainer>
      </Wrapper>
    );
  }
}
