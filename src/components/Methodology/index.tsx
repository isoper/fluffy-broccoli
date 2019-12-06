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
      align-items: center;
      padding-top: ${rem("45px")};
      background: ${colors.darkBlue};
      // background-image: linear-gradient(
      //   180deg,
      //   ${colors.secondary} 0%,
      //   ${colors.secondaryDark} 100%
      // );
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
    `;

    const Grid = styled("div")`
      display: flex;
      justify-content: space-between;
      ${mq[0]} {
        flex-direction: column;
      }
      ${mq[1]} {
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
      top: 120px;
    `;

    const TechnologiesIcons = styled("div")`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      ${mq[0]} {
        height: ${rem("200px")};
        width: 320px;
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
      </Section>
    );
  }
}
