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
      display: grid;
      grid-template-columns: 15% 85%;
      padding-top: ${rem("90px")};
    `;

    const Picture = styled(Img)`
      border-radius: 50%;
      width: 200px;
    `;
    const Content = styled("div")`
      margin-left: ${rem("40px")};
    `;

    const Name = styled("h1")`
      margin: 0px;
      font-size: ${rem("28px")};
      color: #041826;
    `;

    const Position = styled("h2")`
      font-size: ${rem("21px")};
      color: #041826;
      opacity: 0.5;
      margin: 0px;
    `;

    const Bio = styled("p")``;

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
            <a href={linkedin}>
              <LinkedinIcon />
            </a>
          </SocialMedias>
        </Content>
      </Container>
    );
  }
}
