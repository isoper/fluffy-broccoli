import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";
import { FaReact, FaPython, FaAws } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import RoundImage from "./../../components/RoundImage";
import Title from "./../../components/Title";

interface EthosProps {
  data: any;
}

export default class extends React.Component<EthosProps, {}> {
  constructor(props: EthosProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      position: relative;
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
      &::before {
          content: "";
          width: 100%;
          position: absolute;
          background: white;
          border-radius: 30%;
          top: -4%;
      ${mq[0]} {
          height: 6%;
      }
      ${mq[2]} {
          height: 10%;
      }
}
      }
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

    const Step = styled("h2")`
      color: white;
    `;

    const Img = styled(_Img)`
      ${mq[0]} {
        display: none !important;
      }
      ${mq[2]} {
        display: inline-block !important;
      }
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
            <Item>
              <Img fixed={this.props.data.leadership.childImageSharp.fixed} />
              <Content>
                <Step>Strong leadership</Step>
                <p>
                  LUDŌ's founders have a high standard and work ethics.
                  <br />
                  To make it part of our culture, a strong top-down process is
                  built in a way it allows everyone to grow those values.
                </p>
              </Content>
            </Item>
            <Item>
              <Content>
                <Step>Continuous learning</Step>
                <p>
                  Technology is a highly disruptive field. To keep our skills in
                  sync with the fast pace evolution of computer science,
                  learning is a strong aspect of our company culture.
                  <br />
                  At LUDŌ, in addition to our routine of knowledge sharing, we
                  dedicate 2 days per month to training.
                </p>
              </Content>
              <Img
                fixed={this.props.data.continuousLearning.childImageSharp.fixed}
              />
            </Item>
            <Item>
              <Img fixed={this.props.data.topTalent.childImageSharp.fixed} />
              <Content>
                <Step>Top talent</Step>
                <p>
                  Only the best.
                  <br />
                  High standard is one of our core value. Our team is only
                  composed of committed people working their craft toward
                  perfection.
                  <br />
                  Humility, self-awareness and motivation are qualities we
                  carry.
                </p>
              </Content>
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
