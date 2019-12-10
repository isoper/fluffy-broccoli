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

    const JobsLink = styled(Link)`
      display: flex;
      align-items: center;
      text-transform: uppercase;
      color: ${colors.orange};
      font-weight: bold;
      cursor: pointer;
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

    const FaArrowRight = styled(_FaArrowRight)`
      margin: 0 0.5rem;
    `;

    const { profiles } = this.props;

    return (
      <Section>
        <Container>
          <Title primary color={"black"}>
            The Team
          </Title>
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
          <JobsLink to="/jobs">
            We're Hiring, join us! <FaArrowRight />
          </JobsLink>
        </Container>
      </Section>
    );
  }
}
