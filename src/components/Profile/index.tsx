import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import { FaLinkedin } from "react-icons/fa";

interface ProfileProps {
  name: string;
  position: string;
  bio: string;
  picture: any;
  linkedin?: string;
}

export default class extends React.Component<ProfileProps, {}> {
  constructor(props: ProfileProps, context: any) {
    super(props, context);
  }
  public render() {
    const { name, position, bio, picture, linkedin } = this.props;

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
      width: ${rem("173px")};
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

    const SocialMedias = styled("div")``;

    const LinkedinIcon = styled(FaLinkedin)`
      background-color: transparent;
      color: #508aa8;
      font-size: 24px;
      opacity: 0.5;
      cursor: pointer;
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
              <a href={linkedin}>
                <LinkedinIcon />
              </a>
            )}
          </SocialMedias>
        </Content>
      </Container>
    );
  }
}
