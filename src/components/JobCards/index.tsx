import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";

import { colors, mq } from "./../../utils/theme";
import _Container from "./../../components/Container";
import Title from "./../../components/Title";
import _Button from "./../Button";
import WhiteRound from "../../images/WhiteRound.svg";

interface JobCardsProps {
  jobs: { title: string; location: string; content: string }[];
}

export default class extends React.Component<JobCardsProps, {}> {
  constructor(props: JobCardsProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      padding-top: ${rem("70px")};
      padding-bottom: ${rem("70px")};
      position: relative;
      & h1 {
        font-weight: 500;
      }
    `;

    const Container = styled(_Container)`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    `;

    const JobDetails = styled("div")`
      padding-top: ${rem("15px")};
      padding-bottom: ${rem("15px")};
      text-align: left;
      & h2 {
        margin-bottom: 10px;
        color: ${colors.darkBlue};
        font-size: ${rem("20px")};
      }

      & h3 {
        margin-bottom: 10px;
        font-size: ${rem("16px")};
        font-weight: normal;
        color: ${colors.orange};
        opacity: 0.75;
      }

      & p {
        font-size: ${rem("14px")};
        line-height: 1.94;
        opacity: 0.85;
      }
    `;

    const Grid = styled("div")`
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 55%;
      }
    `;

    const Button = styled(_Button)`
      padding: 5px 25px;
      font-size: 18px;
      font-weight: 500;
      border-radius: 10px;
    `

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

    const { jobs } = this.props;
    return (
      <Section>
        <Container>
          <Grid>
            <Title primary color={colors.darkBlue}>
              We're Hiring!
            </Title>
            {jobs.map(job => (
              <JobDetails key={job.title}>
                <h2>{job.title}</h2>
                <h3>{job.location}</h3>
                <p>
                  {job.content}
                </p>
                <Button primary>Apply</Button>
              </JobDetails>
            ))}
          </Grid>
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
