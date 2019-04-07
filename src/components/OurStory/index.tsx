import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import startup from "./../../images/startups.svg";
import sme from "./../../images/sme.svg";
import corporates from "./../../images/corporates.svg";

interface OurStoryProps {
  data: any;
}

export default class extends React.Component<OurStoryProps, {}> {
  constructor(props: OurStoryProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      padding: ${rem("90px")} 0;
      border-bottom-left-radius: 50% 5%;
      border-bottom-right-radius: 50% 5%;
      background-image: linear-gradient(
        180deg,
        ${colors.secondary} 0%,
        ${colors.secondaryDark} 100%
      );
      color: white;
    `;

    const Content = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      width: 100%;
    `;

    const Signature = styled("span")`
      opacity: 0.5;
    `;

    return (
      <Section>
        <Container>
          <Title primary>Our Story</Title>
          <Content>
            <p>
              Having roots in Macedonia I realized that the younger generation
              was embracing the new technology fast and was eager to sharpen
              their skill with the latest trend in the IT sector.
              <br />
              Nevertheless, due to various factor in the economy, the
              opportunity for the young talented professional is scarce as a
              vast majority of the incumbent IT firm prefer to take big old
              corporate projects with old technology but safe dividend.
              <br />I began to think, what if we could empower these young
              ambitious and talented people to develop themselves to the fullest
              extent by exposing them on these big challenging projects that
              French leading startup face right now without the need for them to
              leave the country? At the end of the day he questioned himself
              will I make a meaningful impact on society rather than just
              climbing the ladder of financial career with the privileged one?
              <br />
              Fortunately, This is where his road crossed the one of our leading
              CTO and Guru Bruno Pereira!
            </p>
            <Signature>David Cuklevski, CEO & Co-Founder</Signature>
          </Content>
        </Container>
      </Section>
    );
  }
}
