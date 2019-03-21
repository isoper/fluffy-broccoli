import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, cx } from "emotion";
import { FaTimes, FaBars } from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";

type NavBarProps = {};
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
      position: fixed;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      ${mq[0]} {
        padding: ${rem("10px")} ${rem("40px")};
      }
      ${mq[2]} {
        padding: ${rem("10px")} ${rem("100px")};
      }
      z-index: 1;
      text-transform: uppercase;
      top: 0;
      transition: background-color 0.5s ease-in-out;
      background-color: transparent;
      box-shadow: ${this.state.isSolid
        ? "0px 5px 13px 0px rgba(0, 0, 0, 0.1)"
        : "none"};
    `;

    const solidNavBar = css`
      background-color: ${colors.white};
    `;

    const DivLogo = styled("div")`
      display: flex;
      font-weight: bold;
      font-size: ${rem("30px")};
    `;

    const ImgLogo = styled("img")`
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 50px;
      width: 50px;
      margin-bottom: 0px;
    `;

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

    const A = styled("a")`
      color: ${this.state.isSolid ? colors.primaryDark : colors.white};
      opacity: 0.5;
      text-decoration: none;
      font-weight: 400;
      padding: ${rem("10px")} 0;
      cursor: pointer;
      touch-action: manipulation;
      font-weight: 700;
      &:hover,
      &:focus {
        border-bottom: 2px solid ${colors.accent};
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
          <DivLogo>LUDŌ</DivLogo>
          <UlLinks>
            <Li>
              <A>Methodology</A>
            </Li>
            <Li>
              <A>Ethos</A>
            </Li>
            <Li>
              <A>Team & Hiring</A>
            </Li>
            <Li>FR</Li>
            <Li>EN</Li>
            <Li>MK</Li>
          </UlLinks>
          <SidePanelOpener
            onClick={() => this.setState({ isSidePanelOpened: true })}
          />
        </nav>
        {this.state.isSidePanelOpened && (
          <SidePanel>
            <SidePanelHeader>
              <span>LUDŌ</span>
              <CloseButton
                onClick={() => this.setState({ isSidePanelOpened: false })}
              >
                <FaTimes />
              </CloseButton>
            </SidePanelHeader>
            <SidePanelContent>
              <SidePanelLink>
                <a>Methodology</a>
              </SidePanelLink>
              <SidePanelLink>
                <a>Ethos</a>
              </SidePanelLink>
              <SidePanelLink>
                <a>Team & Hiring</a>
              </SidePanelLink>
            </SidePanelContent>
          </SidePanel>
        )}
      </div>
    );
  }
}
