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
      background-image: linear-gradient(
        180deg,
        ${colors.secondary} 0%,
        ${colors.secondaryDark} 100%
      );
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
      ${mq[0]} {
        padding-top: ${rem("90px")};
      }
      ${mq[2]} {
        padding-top: ${rem("180px")};
      }
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
    `;

    const Grid = styled("div")`
      display: flex;
      flex-direction: column;
      bottom: 120px;
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
    const { leadership, talent, learning } = this.props;

    return (
      <Section>
        <Container>
          <Title primary>Ethos</Title>
          <Grid>
            <Item>
              <Img fixed={leadership.image} />
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
              <Img fixed={learning.image} />
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
      </Section>
    );
  }
}
