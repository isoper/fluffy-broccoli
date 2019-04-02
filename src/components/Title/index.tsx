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
      color: ${(props: { color: string }) =>
        props.color ? props.color : "white"};
      height: 53px;
      border-bottom: 9px solid
        ${(props: { primary: boolean }) =>
          props.primary ? colors.accent : "#508aa8"};

      ${mq[0]} {
        padding-right: 0px;
      }
      ${mq[2]} {
        padding-right: ${(props: { primary: boolean }) =>
          props.primary ? rem("35px") : "0px"};
      }
    `;

    return (
      <Title>
        <H1 primary={this.props.primary} color={this.props.color}>
          {this.props.children}
        </H1>
      </Title>
    );
  }
}
