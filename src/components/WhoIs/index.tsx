import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

import { colors, mq } from "./../../utils/theme";
import _Container from "./../../components/Container";
import Title from "./../../components/Title";
import Profile from "./../../components/Profile";
import Team from "./../Team"
import WhiteRound from '../../images/WhiteRound.svg';

interface WhoIsProps {
  profiles: {
    name: string;
    position: string;
    bio: string;
    picture: any;
    linkedin: string;
  }[]
}

export default class extends React.Component<WhoIsProps, {}> {
  constructor(props: WhoIsProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      padding-top: ${rem("190px")};
      padding-bottom: ${rem("80px")};
      text-align: center;
    `;

    const Container = styled(_Container)`
      position: relative;
    `;

    const Content = styled("p")`
      margin: 0 auto 20px;
      ${mq[0]} {
        width: 100%
      }
      ${mq[1]} {
        width: 700px;
      }
      ${mq[2]} {
        width: 768px;
      }
    `;

    const TeamLink = styled(Link)`
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      color: ${colors.orange};
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 100px;
    `;

    const FaArrowRight = styled(_FaArrowRight)`
      margin: 0 0.5rem;
    `;

    const LeadersGrid = styled("div")`
      display: flex;
      justify-content: center;
      & h1 {
        font-size: 1.5rem !important;
      }
    `

    const RoundBorderBottom = styled("div")`
      background-image: url(${WhiteRound});
      position: absolute;
      z-index: 1;
      bottom: -72px;
      width: 100%;
      height: 100px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      ${mq[3]} {
        height: 104px;
        bottom: -103px;
      }
    `;

    return (
      <Section>
        <Container>
          <Title primary color={colors.darkBlue}>
            Who is LUDŌ?
          </Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet ligula at tellus rutrum tempor ut et nibh. Mauris mi urna,
            auctor faucibus ligula nec, lobortis aliquet mi. Sed ut finibus mi.
          </Content>
          <TeamLink to="/team">
            Our team & jobs <FaArrowRight />
          </TeamLink>

          <LeadersGrid>
            <Title primary color={colors.darkBlue}>
              Who started it all?
            </Title>
          </LeadersGrid>
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
