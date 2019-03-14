import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";
import Button from "./../Button";

interface HeaderProps {}

export default class extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps, context: any) {
    super(props, context);
  }
  public render() {
    const Container = styled("div")`
      background-image: linear-gradient(
        153deg,
        ${colors.primary} 0%,
        ${colors.secondary} 100%
      );
      background-position: center, top;
      background-repeat: repeat;
      background-size: cover, cover;
      height: ${rem("768px")};
      padding: 0 100px;
      padding-top: 125px;
    `;

    const HeaderText = styled("div")`
      display: flex;
      flex-direction: column;
    `;

    const Motto = styled("div")`
      & h1,
      p {
        color: white;
      }
    `;

    return (
      <Container>
        <HeaderText>
          <Motto>
            <h1>A tech team that flows</h1>
            <p>
              Focus on your business, we scale your team up on demand. We are
              your partner in technology.
            </p>
          </Motto>
        </HeaderText>
        <Button value="Work with us" primary={true} />
      </Container>
    );
  }
}
