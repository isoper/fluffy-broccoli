import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";

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
      padding-top: ${rem("90px")};
      background-image: linear-gradient(
        180deg,
        ${colors.secondary} 0%,
        ${colors.secondaryDark} 100%
      );
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
    `;

    const Grid = styled("div")`
      display: flex;
      flex-direction: column;
    `;

    const Item = styled("div")`
      display: flex;
      align-self: center;
      justify-content: space-between;
      padding: 1rem 0;
    `;

    const Img = styled(_Img)`
      ${mq[0]} {
        display: none !important;
      }
      ${mq[2]} {
        display: inline-block !important;
      }
    `;

    const Step = styled("h2")`
      color: white;
    `;

    const Content = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 65%;
      }
    `;

    const CustomerContainer = styled("div")`
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 120px;
    `;

    const CustomerIcons = styled("div")`
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

    const CustomerIcon = styled("img")`
      ${mq[0]} {
        font-size: ${rem("20px")};
      }
      ${mq[2]} {
        font-size: ${rem("30px")};
      }
      width: 45%;
      margin: 0 20px;
      background-color: transparent;
    `;

    const { run, build, innovate } = this.props;

    return (
      <Section>
        <Container>
          <Title primary>Our Services</Title>
          <Grid>
            <Item>
              <Img fixed={run.image} />
              <Content>
                <Step>Run</Step>
                <p dangerouslySetInnerHTML={{ __html: run.content }} />
              </Content>
            </Item>
            <Item>
              <Content>
                <Step>Build</Step>
                <p dangerouslySetInnerHTML={{ __html: build.content }} />
              </Content>
              <Img fixed={build.image} />
            </Item>
            <Item>
              <Img fixed={innovate.image} />
              <Content>
                <Step>Innovate</Step>
                <p dangerouslySetInnerHTML={{ __html: innovate.content }} />
              </Content>
            </Item>
          </Grid>
          <CustomerContainer>
            <Title>We work with</Title>
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
