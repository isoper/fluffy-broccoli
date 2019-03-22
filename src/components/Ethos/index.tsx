import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaReact, FaPython, FaAws } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import RoundImage from "./../../components/RoundImage";
import Title from "./../../components/Title";
import ContinuousLearning from "./img/continuous_learning.png";
import Leadership from "./img/leadership.png";
import TopTalent from "./img/top_talent.png";

interface EthosProps {}

export default class extends React.Component<EthosProps, {}> {
  constructor(props: EthosProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("90px")};
      background-image: linear-gradient(
        180deg,
        ${colors.secondary} 0%,
        ${colors.secondaryDark} 100%
      );
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
    `;

    const Img = styled("img")`
      max-height: ${rem("250px")};
      max-width: ${rem("300px")};
    `;

    const HighlightedImg = styled("img")`
      max-height: ${rem("380px")};
      max-width: ${rem("300px")};
    `;

    const Grid = styled("div")`
      grid-template-columns: 60% 40%;
      ${mq[0]} {
        display: none;
      }
      ${mq[2]} {
        display: grid;
      }
    `;

    const HighlightedItem = styled("div")`
      display: flex;
      align-self: center;
      grid-row-end: span 2;
    `;

    const Item = styled("div")`
      display: flex;
    `;

    const Step = styled("h2")`
      color: white;
    `;

    const Content = styled("div")`
      color: white;
    `;

    const TechnologiesContainer = styled("div")`
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 95px;
    `;

    const TechnologiesIcons = styled("div")`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      ${mq[0]} {
        height: ${rem("200px")};
        width: 350px;
      }
      ${mq[2]} {
        height: ${rem("200px")};
        width: ${rem("700px")};
      }
    `;

    const ReactIcon = styled(FaReact)`
      background-color: transparent;
      color: #508aa8;
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
    `;

    const PythonIcon = styled(FaPython)`
      background-color: transparent;
      color: #c8dff4;
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
    `;

    const AwsIcon = styled(FaAws)`
      background-color: transparent;
      color: #c8dff4;
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
    `;

    return (
      <Section>
        <Container>
          <Title primary>Ethos</Title>
          <Grid>
            <HighlightedItem>
              <HighlightedImg src={Leadership} />
              <Content>
                <Step>Strong leadership</Step>
                <p>Lorem ispum</p>
              </Content>
            </HighlightedItem>
            <Item>
              <Content>
                <Step>Continuous learning</Step>
              </Content>
              <Img src={ContinuousLearning} />
            </Item>
            <Item>
              <Content>
                <Step>Top talent</Step>
              </Content>
              <Img src={TopTalent} />
            </Item>
          </Grid>
          <TechnologiesContainer>
            <Title>Technologies</Title>
            <TechnologiesIcons>
              <RoundImage
                content={<ReactIcon />}
                firstColor={"#c8dff4"}
                secondColor={"#64707a"}
              />
              <RoundImage
                content={<PythonIcon />}
                firstColor={"#508AA8"}
                secondColor={"#284554"}
              />
              <RoundImage
                content={<AwsIcon />}
                firstColor={"#1E4396"}
                secondColor={"#0F224B"}
              />
            </TechnologiesIcons>
          </TechnologiesContainer>
        </Container>
      </Section>
    );
  }
}
