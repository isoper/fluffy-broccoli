import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import RoundImage from "./../../components/RoundImage";
import Title from "./../../components/Title";

interface EthosProps {
  leadership: { title: string; content: string; image: any };
  talent: { title: string; content: string; image: any };
  learning: { title: string; content: string; image: any };
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
      background: ${colors.darkBlue};
      // background-image: linear-gradient(
      //   180deg,
      //   ${colors.secondary} 0%,
      //   ${colors.secondaryDark} 100%
      // );
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
      ${mq[0]} {
        padding-top: ${rem("90px")};
        padding-bottom: ${rem("90px")};
      }
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

    const TitleGrid = styled("div")`
      display: flex;
      justify-content: center;
      & h1 {
        padding-right: 0;
      }
      margin-bottom: 50px;
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

    const Step = styled("h2")`
      color: white;
      font-size: 32px;
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
      color: white;
      & p {
        font-size: 16px;
      }
    `;

    const { leadership, talent, learning } = this.props;

    return (
      <Section>
        <Container>
          <TitleGrid>
            <Title primary>Ethos</Title>
          </TitleGrid>
          <Grid>
            <Item>
              {/* <Img fixed={leadership.image} /> */}
              <Content>
                <Step>Strong leadership</Step>
                <p dangerouslySetInnerHTML={{ __html: leadership.content }} />
              </Content>
            </Item>
            <Item>
              <Content>
                <Step>Continuous learning</Step>
                <p dangerouslySetInnerHTML={{ __html: learning.content }} />
              </Content>
              {/* <Img fixed={learning.image} /> */}
            </Item>
            <Item>
              {/* <Img fixed={talent.image} /> */}
              <Content>
                <Step>Top talent</Step>
                <p dangerouslySetInnerHTML={{ __html: talent.content }} />
              </Content>
            </Item>
          </Grid>
        </Container>
      </Section>
    );
  }
}
