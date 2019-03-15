import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css, cx } from "emotion";

import { colors } from "./../../utils/theme";

type NavBarProps = {};
type NavBarState = {
  isSolid: boolean;
};

export default class extends React.Component<NavBarProps, NavBarState> {
  /* Breakpoint position in px from which we solidify the navbar. */
  SOLIDIFY_BREAKPOINT = 100;

  constructor(props: NavBarProps, context: any) {
    super(props, context);
    this.state = {
      isSolid: false
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
      padding: ${rem("10px")} ${rem("100px")};
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
      display: flex;
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

    return (
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
      </nav>
    );
  }
}
