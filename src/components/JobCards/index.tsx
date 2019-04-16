import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import Container from "./../../components/Container";
import waveIllustration from "./wave.svg";
import Title from "./../../components/Title";

interface JobCardsProps {
  jobs: { title: string; location: string; level: string }[];
}

export default class extends React.Component<JobCardsProps, {}> {
  constructor(props: JobCardsProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("70px")};
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    `;

    const Card = styled("div")`
      display: flex;
      flex-direction: column;
      background-color: rgb(255, 255, 255);
      box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 10px;
      cursor: pointer;
      margin-bottom: 1.5rem;
      backface-visibility: hidden;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid rgb(230, 230, 230);
      transition: all 0.3s cubic-bezier(0.41, 0.094, 0.54, 0.07) 0s;
      padding: 1.5rem;

      & h1 {
        font-size: 1.1875rem;
        color: rgb(55, 57, 66);
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
    `;

    const { jobs } = this.props;
    return (
      <Section>
        <Container>
          <h2>Want to be part of the team?</h2>
          {jobs.map((job, index) => {
            return (
              <Card>
                <h1>{job.title}</h1>
                <span>Interested? Write us at jobs@ludotech.co</span>
              </Card>
            );
          })}
        </Container>
      </Section>
    );
  }
}
