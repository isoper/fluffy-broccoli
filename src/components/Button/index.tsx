import * as React from "react";
import styled from "@emotion/styled";
import { css } from "emotion";
import { rem } from "polished";

import { colors } from "./../../utils/theme";

type ButtonStyle = {
  primary?: boolean;
  secondary?: boolean;
};

type ButtonProps = {
  children: string;
} & ButtonStyle;

const Button = styled("button")`
  cursor: pointer;
  width: ${rem("194px")};
  height: ${rem("42px")};
  font-weight: 700;
  font-size: ${rem("16px")};
  border: ${rem("2px")} solid transparent;
  border-radius: ${rem("10px")};
  color: ${(props: ButtonStyle) => {
    if (props.primary) {
      return colors.white;
    } else if (props.secondary) {
      return colors.primary;
    }
  }};
  background-color: ${(props: ButtonStyle) =>
    props.primary ? colors.accent : null};
  border-color: ${(props: ButtonStyle) =>
    props.secondary ? colors.secondary : null};
  transition: box-shadow 200ms ease, background-color 100ms ease-out;

  &:hover,
  &:focus {
    background-color: ${(props: ButtonStyle) =>
      props.primary ? colors.accent : null};
    border-color: ${(props: ButtonStyle) =>
      props.secondary ? colors.accent : null};
    outline: 0;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &[disabled],
  &[disabled][disabled] {
    background-color: ${colors.disabled};
  }
`;
export default (props: ButtonProps) => (
  <Button primary={props.primary} secondary={props.secondary}>
    {props.children}
  </Button>
);
