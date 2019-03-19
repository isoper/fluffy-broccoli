import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaReact, FaPython, FaAws } from "react-icons/fa";

import { colors } from "./../../utils/theme";
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
      top: 50px;
    `;

    const CustomerIcons = styled("div")`
      display: flex;
      justify-content: space-evenly;
      width: 700px;
    `;

    const CustomerIcon = styled("img")`
      width: ${rem("70px")};
      height: ${rem("70px")};
      margin: 0 20px;
    `;

    const ReactIcon = styled(FaReact)`
      background-color: transparent;
      font-size: 30px;
      color: #508aa8;
    `;

    const PythonIcon = styled(FaPython)`
      background-color: transparent;
      font-size: 30px;
      color: #c8dff4;
    `;

    const AwsIcon = styled(FaAws)`
      background-color: transparent;
      font-size: 30px;
      color: #c8dff4;
    `;

    return (
      <Container>
        <Title content={"Ethos"} primary={true} />
        <Grid>
          <HighlightedItem>
            <HighlightedImg src={Leadership} />
            <Content>
              <Step>Strong leadership</Step>
              <p>Lorem ispum</p>
            </Content>
          </HighlightedItem>
          <Item>
            <Img src={ContinuousLearning} />
            <Content>
              <Step>Continuous learning</Step>
            </Content>
          </Item>
          <Item>
            <Img src={TopTalent} />
            <Content>
              <Step>Top talent</Step>
            </Content>
          </Item>
        </Grid>
        <CustomerContainer>
          <Title content={"Core Technologies"} />
          <CustomerIcons>
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
          </CustomerIcons>
        </CustomerContainer>
      </Container>
    );
  }
}
