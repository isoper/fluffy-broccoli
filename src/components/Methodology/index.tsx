import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";
import { FaReact, FaPython, FaAws } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import RoundImage from "./../../components/RoundImage";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import startup from "./../../images/startups.svg";
import sme from "./../../images/sme.svg";
import corporates from "./../../images/corporates.svg";
import LighterBlueRound from "../../images/LighterBlueRound.svg";

interface MethodologyProps {
  run: { title: string; content: string; image: any };
  build: { title: string; content: string; image: any };
  innovate: { title: string; content: string; image: any };
}

export default class extends React.Component<MethodologyProps, {}> {
  constructor(props: MethodologyProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      position: relative;
      align-items: center;
      padding-top: ${rem("45px")};
      background-image: linear-gradient(
        180deg,
        ${colors.darkBlue},
        ${colors.blue} 83%
      );
    `;

    const Grid = styled("div")`
      display: flex;
      justify-content: space-between;
      ${mq[0]} {
        flex-direction: column;
      }
      ${mq[2]} {
        flex-direction: row;
      }
    `;

    const Item = styled("div")`
      display: flex;
      flex-direction: column;
      align-items: center;
      ${mq[0]} {
        width: 100%;
        padding: 0 30px;
      ${mq[2]} {
        width: 22%;
      }
      padding: 0 10px;
    `;

    const Img = styled(_Img)`
      margin-bottom: 30px;
      ${mq[0]} {
        display: none !important;
      }
      ${mq[2]} {
        display: inline-block !important;
      }
    `;

    const Step = styled("h2")`
      color: white;
      font-size: 32px;
    `;

    const TitleGrid = styled('div')`
      display: flex;
      justify-content: center;
      & h1 {
        padding-right: 0
      }
      margin-bottom: 50px;
    `

    const Content = styled("div")`
      color: white;
      & p {
        font-size: 16px;
      }
    `;

    const TechnologiesContainer = styled("div")`
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      ${mq[0]} {
        top: 210px;
      }
      ${mq[1]} {
        top: 190px;
      }
      ${mq[3]} {
        top: 220px;
      }
    `;

    const TechnologiesIcons = styled("div")`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      z-index: 1;
      ${mq[0]} {
        height: ${rem("200px")};
        width: 100%;
      }
      ${mq[1]} {
        width: 500px;
        padding-top: 25px;
      }
      ${mq[2]} {
        height: ${rem("200px")};
        width: ${rem("700px")};
      }
    `;

    const ReactIcon = styled(FaReact)`
      background-color: transparent;
      color: #fff;
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
    `;

    const PythonIcon = styled(FaPython)`
      background-color: transparent;
      color: #fff;
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
    `;

    const AwsIcon = styled(FaAws)`
      background-color: transparent;
      color: #fff;
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
    `;

    const RoundBorderBottom = styled("div")`
      background-image: url(${LighterBlueRound});
      position: absolute;
      bottom: -72px;
      width: 100%;
      height: 100px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      ${mq[3]} {
        height: 104px;
        bottom: -103px;
      }
    `;


    const { run, build, innovate } = this.props;

    return (
      <Section>
        <Container>
          <TitleGrid>
            <Title primary>Methodology</Title>
          </TitleGrid>
          <Grid>
            <Item>
              {/* <Img fixed={run.image} /> */}
              <Content>
                <Step>Scale</Step>
                <p dangerouslySetInnerHTML={{ __html: run.content }} />
              </Content>
            </Item>
            <Item>
              {/* <Img fixed={build.image} /> */}
              <Content>
                <Step>Build</Step>
                <p dangerouslySetInnerHTML={{ __html: build.content }} />
              </Content>
            </Item>
            <Item>
              {/* <Img fixed={innovate.image} /> */}
              <Content>
                <Step>Innovate</Step>
                <p dangerouslySetInnerHTML={{ __html: innovate.content }} />
              </Content>
            </Item>
          </Grid>
          <TechnologiesContainer>
            <Title primary>Technologies</Title>
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
        <RoundBorderBottom />
      </Section>
    );
  }
}
