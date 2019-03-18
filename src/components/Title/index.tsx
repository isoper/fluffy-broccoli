import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";

interface TitleProps {
  content: string;
  primary: boolean;
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
      color: ${colors.white};
      height: ${rem("45px")};
      border-bottom: 7px solid
        ${(props: { primary: boolean }) =>
          props.primary ? colors.accent : "#508aa8"};
      padding-right: ${(props: { primary: boolean }) =>
        props.primary ? rem("40px") : "0px"};
    `;

    return (
      <Title>
        <H1 primary={this.props.primary}>{this.props.content}</H1>
      </Title>
    );
  }
}
