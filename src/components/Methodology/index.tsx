import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import RoundImage from "./../../components/RoundImage";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import startup from "./../../images/startups.svg";
import sme from "./../../images/sme.svg";
import corporates from "./../../images/corporates.svg";

interface MethodologyProps {
  data: any;
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
      ${mq[0]} {
        height: ${rem("200px")};
        width: 350px;
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

    return (
      <Section>
        <Container>
          <Title primary>Our Services</Title>
          <Grid>
            <HighlightedItem>
              <Img fixed={this.props.data.build.childImageSharp.fixed} />
              <Content>
                <Step>Build</Step>
                <p>
                  We make your ideas alive. During workshops we understand your
                  need and define the core features for a Most Valuable Product.
                  <br />
                  In 8 weeks, we deliver you a turn-key product. This solutions
                  suits any type of business without the resources to develop a
                  proof of concept.
                </p>
              </Content>
            </HighlightedItem>
            <Item>
              <Content>
                <Step>Run</Step>
              </Content>
              <Img fixed={this.props.data.run.childImageSharp.fixed} />
            </Item>
            <Item>
              <Content>
                <Step>Innovate</Step>
              </Content>
              <Img fixed={this.props.data.innovate.childImageSharp.fixed} />
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
