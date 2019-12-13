import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { FaLinkedin, FaTwitter, FaCloud, FaGithub } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import _Container from "./../../components/Container";
import Title from "./../../components/Title";
import WhiteRound from '../../images/WhiteRound.svg';

interface WhoIsProps {
  profiles: {
    name: string;
    position: string;
    bio: string;
    picture: any;
    linkedin?: string;
    twitter?: string;
    cloud?: string;
    github?: string;
  }[]
}

export default class extends React.Component<WhoIsProps, {}> {
  constructor(props: WhoIsProps, context: any) {
    super(props, context);
  }
  public render() {
    const { profiles } = this.props;
    
    const Section = styled("section")`
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      padding-top: ${rem("190px")};
      padding-bottom: ${rem("80px")};
      text-align: center;

      & h1 {
        font-weight: 500 !important;
        font-size: ${rem("36px")};
      }
    `;

    const Container = styled(_Container)`
      position: relative;
    `;

    const Content = styled("p")`
      margin: 0 auto 20px;
      font-size: ${rem("16px")};
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
      font-weight: 500;
    `;

    const FaArrowRight = styled(_FaArrowRight)`
      margin: 0 0.5rem;
      font-weight: 500;
    `;

    const LeadersGrid = styled("div")`
      display: flex;
      justify-content: center;
      flex-direction: column;
      & h1 {
        font-size: ${rem("28px")} !important;
        height: 52px !important;
      }
    `

    const Profile = styled("div")`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      ${mq[0]} {
        margin: 0 0 35px;
      }
      ${mq[2]} {
        margin: 0 80px;
      }
      & h2 {
        margin-bottom: 5px;
        color: ${colors.darkBlue};
        font-size: ${rem("20px")};
        font-weight: 500;
      }
      & p {
        font-size: ${rem("15px")};
        opacity: 0.85;
        margin-bottom: 5px;
      }

      & a {
        display: flex;
        align-items: center;
      }

      & a > * {
        background-color: #fff;
        margin: 0 7.5px;
        color: #cccccc;
        font-size: 24px;
        cursor: pointer;
      }
    `;
    
    const Picture = styled(Img)`
      border-radius: 50%;
      margin-bottom: 25px;
    `;

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

    const ProfileGrid = styled('div')`
      display: flex;
      justify-content: center;
      margin-top: 20px;
      ${mq[0]} {
        flex-direction: column;
      }
      ${mq[2]} {
        flex-direction: row;
      }
    `

    const IconGrid = styled('div')`
      display: flex;
    `

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
            <ProfileGrid>
              {profiles.map(profile => (
                <Profile key={profile.name}>
                  <Picture fixed={profile.picture} />
                  <h2>{profile.name}</h2>
                  <p>{profile.position}</p>
                  <IconGrid>
                    {profile.linkedin && (
                      <a href={profile.linkedin} target="_blank">
                        <FaLinkedin />
                      </a>
                    )}
                    {profile.twitter && (
                      <a href={profile.twitter} target="_blank">
                        <FaTwitter />
                      </a>
                    )}
                    {profile.github && (
                      <a href={profile.github} target="_blank">
                        <FaGithub />
                      </a>
                    )}
                    {profile.cloud && (
                      <a href={profile.cloud} target="_blank">
                        <FaCloud />
                      </a>
                    )}
                  </IconGrid>
                </Profile>
              ))}
            </ProfileGrid>
          </LeadersGrid>
        </Container>
        <RoundBorderBottom />
      </Section>
    );
  }
}
