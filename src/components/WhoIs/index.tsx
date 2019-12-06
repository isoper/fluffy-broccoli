import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

import { colors } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import Profile from "./../../components/Profile";
import Team from "./../Team"

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
      justify-content: center;
      padding-top: ${rem("150px")};
      padding-bottom: ${rem("80px")};
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
      text-align: center;
    `;

    const Content = styled("p")`
      width: 768px;
      margin: 0 auto 20px;
    `;

    const TeamLink = styled(Link)`
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      color: ${colors.accent};
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 100px;
    `;

    const FaArrowRight = styled(_FaArrowRight)`
      margin: 0 0.5rem;
    `;

    const LeadersGrid = styled("div")`
      display: flex;
      
    `

    return (
      <Section>
        <Container>
          <Title primary color={colors.darkBlue}>
            Who is LUDŌ?
          </Title>
          <Content>
            Ludo is a development agency helping partners scaling their teams on
            demand. Whenever you have a problem, we provide you a tailor-made
            teams. As a partner building long-term relationship We are driven by
            your success. Our strong culture of continuous learning allow us to
            stay ahead of the technological curve. Our Software craftsmanship
            experts can turn any of your dream into reality.
          </Content>
          <TeamLink to="/team">
            Our team & jobs <FaArrowRight />
          </TeamLink>

          <Title primary color={colors.darkBlue}>
            Who started it all?
          </Title>
          <LeadersGrid>
          </LeadersGrid>
        </Container>
      </Section>
    );
  }
}
