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

interface JobsHeaderProps {
  title: string;
}

export default class extends React.Component<JobsHeaderProps, {}> {
  constructor(props: JobsHeaderProps, context: any) {
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
        padding-top: ${rem("45px")};
      }
      min-height: 70vh;
      background: linear-gradient(
        180deg,
        ${colors.primaryDark},
        ${colors.secondaryDark} 83%
      );
    `;

    const Container = styled(_Container)`
      display: flex;
      flex-direction: column;
      align-items: center;
      ${mq[0]} {
        padding-top: 5rem;
        height: 100vh;
      }
      ${mq[2]} {
        padding-top: 0rem;
        height: unset;
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

    const { title } = this.props;

    return (
      <Section>
        <Container>
          <HeaderText>
            <Motto>
              <div dangerouslySetInnerHTML={{ __html: title }} />
            </Motto>
          </HeaderText>
        </Container>
      </Section>
    );
  }
}
