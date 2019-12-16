import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, cx } from "emotion";
import { FaTimes, FaBars } from "react-icons/fa";
import Img from "gatsby-image";
import { Link } from "gatsby";
import _Container from "./../../components/Container";
import { colors, mq } from "./../../utils/theme";

type NavBarProps = {
  data: any;
};
type NavBarState = {
  isSolid: boolean;
  isSidePanelOpened: boolean;
};

export default class extends React.Component<NavBarProps, NavBarState> {
  /* Breakpoint position in px from which we solidify the navbar. */
  SOLIDIFY_BREAKPOINT = 100;

  constructor(props: NavBarProps, context: any) {
    super(props, context);
    this.state = {
      isSolid: false,
      isSidePanelOpened: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.solidifyNavbar, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.solidifyNavbar);
  }

  solidifyNavbar = () => {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const isSolid = scrollPosition > this.SOLIDIFY_BREAKPOINT;
    /* Only update state if necessary to avoid useless rendering. */
    if (this.state.isSolid != isSolid) {
      this.setState({ isSolid: isSolid });
    }
  };

  public render() {
    type NavProps = {
      theme?: any;
      isSolid: boolean;
    };
    const Nav = css`
      display: flex;
      color: ${this.state.isSolid ? colors.primaryDark : colors.white};
      text-transformation: uppercase;
      width: 100%;
      z-index: 2;
      position: fixed;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      ${mq[0]} {
        padding-top: ${rem("10px")};
        padding-bottom: ${rem("10px")};
      }
      top: 0;
      transition: background-color 0.5s ease-in-out;
      background-color: transparent;
      box-shadow: ${this.state.isSolid
        ? "0px 5px 13px 0px rgba(0, 0, 0, 0.1)"
        : "none"};
    `;

    const Container = styled(_Container)`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    const solidNavBar = css`
      background-color: ${colors.white};
    `;

    const ImgLogo = styled(Img)`
      cursor: pointer;
    `;

    const UlLinks = styled("ul")`
      ${mq[0]} {
        display: none !important;
      }
      ${mq[2]} {
        display: flex !important;
      }
      list-style: none;
      margin: 0px;
    `;

    const Li = styled("li")`
      padding: ${rem("5px")};
      margin: 0px;
      margin-right: ${rem("20px")};
    `;

    const A = styled(Link)`
      color: ${this.state.isSolid ? colors.darkBlue : colors.white};
      opacity: ${this.state.isSolid ? '1' : '0.5'};
      text-decoration: none;
      font-size: 0.8rem;
      padding: ${rem("10px")} 0;
      cursor: pointer;
      touch-action: manipulation;
      font-weight: 700;
      &:hover,
      &:focus {
        border-bottom: 2px solid ${colors.orange};
        opacity: 1;
      }
    `;

    const MobileLogoLink = styled(Link)`
      ${mq[0]} {
        display: flex;
      }
    `;

    const SidePanelOpener = styled(FaBars)`
      ${mq[0]} {
        display: flex !important;
      }
      ${mq[2]} {
        display: none !important;
      }
      cursor: pointer;
      font-size: 30px;
    `;

    const SidePanel = styled("nav")`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      padding: 1.5rem 0;
      z-index: 500;
      background-color: #ffffff;
      will-change: transform;
      transform: 0.5s;
    `;

    const SidePanelHeader = styled("div")`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      & span {
        font-weight: 700;
      }
    `;

    const CloseButton = styled("button")`
      background-color: transparent;
      border: none;
      cursor: pointer;
    `;

    const SidePanelContent = styled("ul")`
      padding-left: 0;
      margin-top: 1.5rem;
      list-style-type: none;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    `;

    const SidePanelLink = styled("li")`
      display: list-item;
      text-align: -webkit-match-parent;

      & a {
        font-weight: 700;
        display: inline-block;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: #333347;
        cursor: pointer;
      }
    `;

    const FlagsGrid = styled("div")`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & div:not(:first-of-type) {
        opacity: 0.3;
        margin-left: 10px;
      }
      & div {
        transition: 0.3s;
      }
      & div:hover {
        opacity: 1;
      }
    `;

    const FlagImg = styled(Img)`
      cursor: pointer;
    `;

    return (
      <div>
        <nav className={cx(Nav, { [solidNavBar]: this.state.isSolid })}>
          <Container>
            <MobileLogoLink to="/">
              {this.state.isSolid ? (
                <ImgLogo
                  fixed={this.props.data.darkLogo.childImageSharp.fixed}
                  fadeIn={false}
                />
              ) : (
                <ImgLogo
                  fixed={this.props.data.lightLogo.childImageSharp.fixed}
                  fadeIn={false}
                />
              )}
            </MobileLogoLink>
            <UlLinks>
              <Li>
                <A to="/team">Team & Hiring</A>
              </Li>
              <FlagsGrid>
                <FlagImg fixed={this.props.data.enFlag.childImageSharp.fixed} />
                <FlagImg fixed={this.props.data.frFlag.childImageSharp.fixed} />
                <FlagImg fixed={this.props.data.mkFlag.childImageSharp.fixed} />
              </FlagsGrid>
            </UlLinks>
            <SidePanelOpener
              onClick={() => this.setState({ isSidePanelOpened: true })}
            />
          </Container>
        </nav>
        {this.state.isSidePanelOpened && (
          <SidePanel>
            <SidePanelHeader>
              <Link
                to="/"
                onClick={() => this.setState({ isSidePanelOpened: false })}
              >
                <ImgLogo
                  fixed={this.props.data.darkLogo.childImageSharp.fixed}
                  fadeIn={false}
                />
              </Link>
              <CloseButton
                onClick={() => this.setState({ isSidePanelOpened: false })}
              >
                <FaTimes />
              </CloseButton>
            </SidePanelHeader>
            <SidePanelContent>
              <SidePanelLink>
                <Link
                  to="/team"
                  onClick={() => this.setState({ isSidePanelOpened: false })}
                >
                  Team & Hiring
                </Link>
                <FlagsGrid>
                  <FlagImg
                    fixed={this.props.data.enFlag.childImageSharp.fixed}
                  />
                  <FlagImg
                    fixed={this.props.data.frFlag.childImageSharp.fixed}
                  />
                  <FlagImg
                    fixed={this.props.data.mkFlag.childImageSharp.fixed}
                  />
                </FlagsGrid>
              </SidePanelLink>
            </SidePanelContent>
          </SidePanel>
        )}
      </div>
    );
  }
}
