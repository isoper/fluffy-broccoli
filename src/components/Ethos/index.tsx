import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import BlueRound from "../../images/BlueRound.svg";
import Circles from "../../images/CircleWavesBottom.svg";

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
      background-image: url(${Circles}),
        linear-gradient(180deg, ${colors.blue}, ${colors.darkBlue});
      background-position: bottom;
      ${mq[0]} {
        padding-top: ${rem("100px")};
        padding-bottom: ${rem("50px")};
      }
      ${mq[3]} {
        padding-top: ${rem("150px")};
      }
      & p {
        opacity: 0.85;
        font-size: ${rem("11px")};
        line-height: 1.88;
      }
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
      align-items: flex-end;
      ${mq[0]} {
        width: 100%;
        padding: 0 30px;
      ${mq[2]} {
        width: 25%;
      }
      padding: 0 10px;
    `;

    const Step = styled("h2")`
      color: white;
      font-size: ${rem("22px")};
      font-weight: normal;
      margin-bottom: 10px;
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

    const Content = styled("div")`
      color: white;
      & p {
        font-size: 16px;
      }
    `;

    const RoundBorderBottom = styled("div")`
      background-image: url(${BlueRound});
      position: absolute;
      bottom: -72px;
      width: 100%;
      height: 100px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      z-index: -1;
      ${mq[3]} {
        height: 104px;
        bottom: -103px;
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
              <Img fixed={leadership.image} />
              <Content>
                <Step>Strong leadership</Step>
                <p dangerouslySetInnerHTML={{ __html: leadership.content }} />
              </Content>
            </Item>
            <Item>
              <Img fixed={learning.image} />
              <Content>
                <Step>Continuous learning</Step>
                <p dangerouslySetInnerHTML={{ __html: learning.content }} />
              </Content>
            </Item>
            <Item>
              <Img fixed={talent.image} />
              <Content>
                <Step>Top talent</Step>
                <p dangerouslySetInnerHTML={{ __html: talent.content }} />
              </Content>
            </Item>
          </Grid>
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
