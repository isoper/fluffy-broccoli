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

    const DivLogo = styled("div")`
      display: flex;
      font-weight: bold;
      font-size: ${rem("30px")};
    `;

    const ImgLogo = styled(Img)`
      width: 120px;
      cursor: pointer;
    `;

    const Logo = styled('img')`
      width: 120px;
      cursor: pointer;
    `

    const Span = styled("span")`
      color: white;
      font-weight: 700;
      font-size: 1.8rem;
      margin-left: 10px;
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
      color: ${this.state.isSolid ? colors.primaryDark : colors.white};
      opacity: 0.5;
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

    return (
      <div>
        <nav className={cx(Nav, { [solidNavBar]: this.state.isSolid })}>
          <Container>
            <Link to="/">
              {this.state.isSolid ? (
                <ImgLogo
                  fluid={this.props.data.logo.childImageSharp.fluid}
                  fadeIn={false}
                />
              ) : (
                <Logo src={`../../images/LogoLightBackground.png`} alt="logo" />
              )}
            </Link>
            <UlLinks>
              <Li>
                <A to="/team">Team & Hiring</A>
              </Li>
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
                  fluid={this.props.data.logo.childImageSharp.fluid}
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
              </SidePanelLink>
            </SidePanelContent>
          </SidePanel>
        )}
      </div>
    );
  }
}
