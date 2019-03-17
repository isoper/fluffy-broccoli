import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";
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
    const Container = styled("div")`
      display: flex;
      flex-direction: column;
      height: ${rem("768px")};
      background-image: linear-gradient(
        180deg,
        ${colors.secondary} 0%,
        ${colors.secondaryDark} 100%
      );
      padding: ${rem("40px")} ${rem("100px")};
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    `;

    const Title = styled("div")`
      display: inline-block;
    `;
    const H1 = styled("h1")`
      display: inline-block;
      color: ${colors.white};
      height: ${rem("45px")};
      border-bottom: 7px solid
        ${(props: { primary: boolean }) =>
          props.primary ? colors.accent : "#508aa8"};
      padding-right: ${rem("40px")};
    `;

    const Img = styled("img")`
      height: ${rem("200px")};
      width: ${rem("200px")};
    `;
    const HighlightedImg = styled("img")`
      height: ${rem("350px")};
      width: ${rem("350px")};
    `;
    const Grid = styled("div")`
      display: grid;
      grid-template-columns: 75% 25%;
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
      top: 85px;
    `;

    const CustomerIcons = styled("div")``;

    const CustomerIcon = styled("img")`
      width: ${rem("70px")};
      height: ${rem("70px")};
      margin: 0 20px;
    `;

    return (
      <Container>
        <Title>
          <H1>Methodology</H1>
        </Title>
        <Grid>
          <HighlightedItem>
            <HighlightedImg src={build} />
            <Content>
              <Step>Build</Step>
              <p>Lorem ispum</p>
            </Content>
          </HighlightedItem>
          <Item>
            <Img src={run} />
            <Content>
              <Step>Run</Step>
            </Content>
          </Item>
          <Item>
            <Img src={innovate} />
            <Content>
              <Step>Innovate</Step>
            </Content>
          </Item>
        </Grid>
        <CustomerContainer>
          <Title>
            <H1>Who we work with</H1>
          </Title>
          <CustomerIcons>
            <CustomerIcon src={corporates} />
            <CustomerIcon src={sme} />
            <CustomerIcon src={startup} />
          </CustomerIcons>
        </CustomerContainer>
      </Container>
    );
  }
}
