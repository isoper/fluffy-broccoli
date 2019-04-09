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
import Profile from "./../../components/Profile";

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
      align-items: center;
      padding: ${rem("90px")} 0;
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

    const { profiles } = this.props;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            The Team
          </Title>
          <Content>bla bla bla</Content>
          {profiles.map((profile, index) => {
            return (
              <Profile
                name={profile.name}
                position={profile.position}
                bio={profile.bio}
                picture={profile.picture}
                linkedin={profile.linkedin}
              />
            );
          })}
        </Container>
      </Section>
    );
  }
}
