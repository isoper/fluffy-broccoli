import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors, mq } from "./../../utils/theme";

interface TitleProps {
  primary: boolean;
  color: string;
}

export default class extends React.Component<TitleProps, {}> {
  constructor(props: TitleProps, context: any) {
    super(props, context);
  }
  public render() {
    const Title = styled("div")`
      display: inline-block;
    `;

    const H1 = styled("h1")`
      display: inline-block;
      font-weight: normal;
      font-size: ${rem("32px")};
      color: ${(props: { color: string }) =>
        props.color ? props.color : "white"};
      height: 63px;
      ${mq[2]} {
        padding-right: ${(props: { primary: boolean }) =>
          props.primary ? rem("5px") : "0px"};
        padding-left: ${(props: { primary: boolean }) =>
          props.primary ? rem("5px") : "0px"};
      }
      border-bottom: 5px solid
        ${(props: { primary: boolean }) =>
          props.primary ? colors.orange : "#508aa8"};
    `;

    return (
      <Title primary={this.props.primary} color={this.props.color}>
        <H1 primary={this.props.primary} color={this.props.color}>
          {this.props.children}
        </H1>
      </Title>
    );
  }
}
