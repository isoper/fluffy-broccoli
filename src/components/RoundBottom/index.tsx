import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowRight as _FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

import { colors, mq } from "./../../utils/theme";
import _Container from "./../../components/Container";
import Title from "./../../components/Title";
import Profile from "./../../components/Profile";
import Team from "./../Team";
import WhiteRound from "../../images/WhiteRound.svg";
import BlueRound from "../../images/BlueRound.svg"

interface RoundBorderBottomProps {
  blue: boolean;
}

export default class extends React.Component<RoundBorderBottomProps, {}> {
  constructor(props: RoundBorderBottomProps, context: any) {
    super(props, context);
  }
  public render() {
    const RoundBorderBottom = styled("div")`
      background-image: url(${(props: { blue: boolean }) => (props.blue ? BlueRound : WhiteRound)});
      // background-image: ${(props: { blue: boolean }) => (props.blue ? `url(${BlueRound})` : `url(${WhiteRound})`)};
      position: absolute;
      bottom: -72px;
      z-index: 1;
      width: 100%;
      height: 100px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
    `;

    return (
      <RoundBorderBottom />
    );
  }
}
