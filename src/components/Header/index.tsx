import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { colors, mq } from "./../../utils/theme";
import _Button from "./../Button";
import Title from "./../Title";
import _Container from "./../../components/Container";
import Divider from "../../images/Waves.svg";
import Circles from "../../images/Circles.svg";

interface HeaderProps {
  data: any;
  team: boolean;
  bannerLogo: string;
  title: string;
  headerText: string;
}

export default class extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps, context: any) {
    super(props, context);
  }
  public render() {
    const { team, bannerLogo, title, headerText } = this.props;

    const Wrapper = styled("div")`
      overflow: hidden;
      position: relative;
    `;

    const Section = styled("section")`
      display: flex;
      justify-content: center;
      ${mq[0]} {
        align-items: flex-start;
      }
      ${mq[1]} {
        align-items: center;
        padding-top: 0;
      }
      min-height: 100vh;
      background-image: url(${Divider}),
       linear-gradient(
        180deg,
        ${colors.darkBlue},
        ${colors.blue}
      );
      background-repeat: no-repeat;
      background-position: bottom;
      position: relative;
    `;

    const Container = styled(_Container)`
      display: flex;
      align-items: center;
      ${mq[0]} {
        padding-top: 5rem;
      }
      ${mq[1]} {
        padding-top: 0rem;
      }
      ${mq[2]} {
        padding-top: 0rem;
      }
    `;

    const BannerLogo = styled(Img)`
      width: ${rem("400px")};
      height: auto;
      right: -25%;
      z-index: 0;
      ${mq[0]} {
        display: none;
      }
      ${mq[2]} {
        display: block;
      }
      @media (min-width: 1600px) {
        right: -15%;
      }
    `;

    const HeaderText = styled("div")`
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      ${mq[0]} {
        width: 100%;
        & h1 {
          font-size: ${rem("26px")};
          font-weight: normal;
          margin-bottom: 20px;
          padding-left: 0 !important;
          height: 57px !important;
        }
        & p {
          font-size: ${rem("14px")};
          opacity: 0.85;
        }
      }
      padding-top: ${rem("40px")};
      ${mq[1]} {
        padding-top: 0;
        & h1 {
          font-size: ${rem("42px")};
          letter-spacing: 1.55px;
          height: 77px !important;
        }
      }
      ${mq[2]} {
        width: 650px;
      }
      & p {
        margin-bottom: 0px;
      }
    `;

    const Button = styled(_Button)`
      margin-top: ${rem("30px")};
      font-size: ${rem("14px")};
      font-weight: normal;
      border-radius: 4px;
      padding: 0.2rem 2rem;
      ${mq[0]} {
        margin-bottom: 20px;
      }
    `;

    const MoreButton = styled("div")`
      margin-bottom: 5px;
      color: white;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 6px;
      padding-left: 2px;
      width: 50px;
      height: 50px;
      opacity: 0.8;
      background-color: rgba(0, 36, 100, 0.2);
      background-clip: padding-box;
      border: solid 1px rgba(112, 112, 112, 0.08);
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      bottom: 9%;
      ${mq[0]} {
        display: none;
      }
      ${mq[1]} {
        display: flex;
      }
    `;

    const WhiteCircles = styled("div")`
      background: url(${Circles});
      position: absolute;
      width: 50%;
      height: 100%;
      background-repeat: no-repeat;
      right: 9%;
      top: -16%;
    `;

    return (
      <Wrapper>
        <Section>
          <Container>
            <HeaderText>
              {team ? <Title primary>{title}</Title> : <h1>{title}</h1>}
              <p dangerouslySetInnerHTML={{ __html: headerText }} />
              {!team && (
                <Link to='/team'>
                  <Button primary>We are hiring</Button>
                </Link>
              )}
            </HeaderText>
            <BannerLogo fluid={bannerLogo} />
          </Container>
          <MoreButton>
            <Link to={team ? "/team/#core-team" : "/#our-services"}>
              <FaArrowDown />
            </Link>
          </MoreButton>
          <WhiteCircles />
        </Section>
      </Wrapper>
    );
  }
}
