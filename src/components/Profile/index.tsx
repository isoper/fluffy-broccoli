import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import { FaLinkedin } from "react-icons/fa";

interface ProfileProps {
  name: string;
  position: string;
  description: string;
  picture: any;
  linkedin?: string;
}

export default class extends React.Component<ProfileProps, {}> {
  constructor(props: ProfileProps, context: any) {
    super(props, context);
  }
  public render() {
    const { name, position, description, picture, linkedin } = this.props;

    const Container = styled("section")`
      display: flex;
      align-items: center;
      padding-top: ${rem("90px")};
    `;

    const Picture = styled(Img)`
      border-radius: 50%;
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

    const Description = styled("p")``;

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
          <Description>{description}</Description>
          <SocialMedias>
            <LinkedinIcon href="http://google.fr" />
          </SocialMedias>
        </Content>
      </Container>
    );
  }
}
