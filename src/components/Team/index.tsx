import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import _Img from "gatsby-image";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import Container from "./../../components/Container";
import Title from "./../../components/Title";
import Profile from "./../../components/Profile";
import BlueRound from "../../images/BlueRound.svg";

interface TeamProps {
  title: string;
  teamText: string;
  profiles: {
    name: string;
    position: string;
    bio: string;
    picture: any;
    linkedin: string;
    twitter: string;
    github: string;
    cloud: string;
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
      font-size: ${rem("15px")};
      line-height: 1.33;
      ${mq[2]} {
        padding-right: ${rem("30px")};
      }
    `;

    const { profiles, title, teamText } = this.props;

    return (
      <Section>
        <Container>
          <Title primary color={"white"}>
            {title}
          </Title>
          <TeamInfo dangerouslySetInnerHTML={{ __html: teamText }} />
          <Content />
          {profiles.map(profile => {
            return (
              <Profile
                key={profile.name}
                name={profile.name}
                position={profile.position}
                bio={profile.bio}
                picture={profile.picture}
                linkedin={profile.linkedin}
                twitter={profile.twitter}
                github={profile.github}
                cloud={profile.cloud}
              />
            );
          })}
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
