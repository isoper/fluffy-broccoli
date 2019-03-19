import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";
import RoundImage from "./../../components/RoundImage";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import build from "./img/build.png";
import innovate from "./img/innovate.png";
import run from "./img/run.png";
import startup from "./img/startups.svg";
import sme from "./img/sme.svg";
import corporates from "./img/corporates.svg";

interface MethodologyProps {}

export default class extends React.Component<MethodologyProps, {}> {
  constructor(props: MethodologyProps, context: any) {
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
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
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
      display: grid;
      grid-template-columns: 60% 40%;
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

    const CustomerContainer = styled("div")`
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 95px;
    `;

    const CustomerIcons = styled("div")`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: ${rem("200px")};
      width: ${rem("700px")};
    `;

    const CustomerIcon = styled("img")`
      width: ${rem("30px")};
      height: ${rem("30px")};
      margin: 0 20px;
      background-color: transparent;
    `;

    return (
      <Section>
        <Container>
          <Title content={"Methodology"} primary={true} />
          <Grid>
            <HighlightedItem>
              <HighlightedImg src={build} />
              <Content>
                <Step>Build</Step>
                <p>Lorem ispum</p>
              </Content>
            </HighlightedItem>
            <Item>
              <Content>
                <Step>Run</Step>
              </Content>
              <Img src={run} />
            </Item>
            <Item>
              <Content>
                <Step>Innovate</Step>
              </Content>
              <Img src={innovate} />
            </Item>
          </Grid>
          <CustomerContainer>
            <Title content={"Who we work with"} />
            <CustomerIcons>
              <RoundImage
                content={<CustomerIcon src={corporates} />}
                firstColor={"#c8dff4"}
                secondColor={"#64707a"}
              />
              <RoundImage
                content={<CustomerIcon src={sme} />}
                firstColor={"#508AA8"}
                secondColor={"#284554"}
              />
              <RoundImage
                content={<CustomerIcon src={startup} />}
                firstColor={"#1E4396"}
                secondColor={"#0F224B"}
              />
            </CustomerIcons>
          </CustomerContainer>
        </Container>
      </Section>
    );
  }
}
