import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import { mq } from "./../../utils/theme";
import { FaLinkedin, FaTwitter, FaCloud, FaGithub } from "react-icons/fa";

interface ProfileProps {
  name: string;
  position: string;
  bio: string;
  picture: any;
  linkedin?: string;
  twitter?: string;
  cloud?: string;
  github?: string;
}

export default class extends React.Component<ProfileProps, {}> {
  constructor(props: ProfileProps, context: any) {
    super(props, context);
  }
  public render() {
    const { name, position, bio, picture, linkedin, twitter, github, cloud } = this.props;

    const Container = styled("section")`
      padding-top: ${rem("45px")};
      ${mq[0]} {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      ${mq[2]} {
        display: grid;
        width: 100%;
        justify-content: center;
        grid-template-columns: ${rem("160px")} auto;
        align-items: flex-start;
        padding-left: ${rem("50px")};
        padding-right: ${rem("50px")};
      }
    `;

    const Picture = styled(Img)`
      border-radius: 50%;
      align-self: flex-start;
      justify-self: center;
      ${mq[0]} {
        margin-bottom: 25px;
      }
      ${mq[2]} {
        margin-bottom: 0;
      }
    `;

    const Content = styled("div")`
      ${mq[0]} {
        margin-left: 0;
      }
      ${mq[2]} {
        margin-left: ${rem("20px")};
      }
    `;

    const Name = styled("h2")`
      margin-bottom: 5px;
      font-size: 28px;
      color: #fff;
      opacity: 0.85;
    `;

    const Position = styled("h3")`
      font-size: 21px;
      color: #fff;
      opacity: 0.85;
      margin-bottom: 15px;
    `;

    const Bio = styled("p")`
      margin-bottom: 10px;
      font-size: 18px;
      color: #fff;
      opacity: 0.85;
      ${mq[2]} {
        width: 80%;
      }
    `;

    const SocialMedias = styled("div")`
      & a > * {
        background-color: transparent;
        margin-right: 15px;
        color: #cccccc;
        opacity: 0.4;
        font-size: 24px;
        cursor: pointer;
        trainsition: 0.3s;
      }

      & a > *:hover {
        color: #fff;
        opacity: 1;
      }
    `;

    return (
      <Container>
        <Picture fixed={picture} />
        <Content>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Bio dangerouslySetInnerHTML={{ __html: bio }} />
          <SocialMedias>
            {linkedin && (
              <a href={linkedin} target="_blank">
                <FaLinkedin />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank">
                <FaTwitter />
              </a>
            )}
            {github && (
              <a href={github} target="_blank">
                <FaGithub />
              </a>
            )}
            {cloud && (
              <a href={cloud} target="_blank">
                <FaCloud />
              </a>
            )}
          </SocialMedias>
        </Content>
      </Container>
    );
  }
}
