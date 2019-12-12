import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import _Img from "gatsby-image";
import { Link } from "gatsby";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import startup from "./../../images/startups.svg";
import sme from "./../../images/sme.svg";
import corporates from "./../../images/corporates.svg";
import Profile from "./../../components/Profile";
import BlueRound from "../../images/BlueRound.svg";

interface TeamProps {
  profiles: {
    name: string;
    position: string;
    bio: string;
    picture: any;
    linkedin: string;
  }[];
}

export default class extends React.Component<TeamProps, {}> {
  constructor(props: TeamProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      position: relative;
      align-items: center;
      padding-top: ${rem("90px")};
      padding-bottom: ${rem("110px")};
      background-image: linear-gradient(
        180deg,
        ${colors.blue},
        ${colors.darkBlue}
      );
      & h1 {
        font-size: ${rem("36px")};
        height: 68px;
      }
    `;

    const Content = styled("div")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${mq[0]} {
        width: 100%;
      }
      ${mq[2]} {
        width: 65%;
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
      ${mq[3]} {
        height: 104px;
        bottom: -103px;
      }
    `;

    const TeamInfo = styled("p")`
      color: #fff;
      opacity: 0.85;
      padding-right: ${rem("30px")};
      font-size: ${rem("15px")};
      line-height: 1.33;
    `;

    const { profiles } = this.props;

    return (
      <Section>
        <Container>
          <Title primary color={"white"}>
            Core Team
          </Title>
          <TeamInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet ligula at tellus rutrum tempor ut et nibh. Mauris mi urna,
            auctor faucibus ligula nec, lobortis aliquet mi.
          </TeamInfo>
          <Content />
          {profiles.map((profile, index) => {
            return (
              <Profile
                key={profile.name}
                name={profile.name}
                position={profile.position}
                bio={profile.bio}
                picture={profile.picture}
                linkedin={profile.linkedin}
              />
            );
          })}
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
