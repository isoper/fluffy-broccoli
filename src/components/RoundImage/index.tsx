import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors } from "./../../utils/theme";

interface RoundImageProps {
  content: React.Component;
  firstColor: string;
  secondColor: string;
}

export default class extends React.Component<RoundImageProps, {}> {
  constructor(props: RoundImageProps, context: any) {
    super(props, context);
  }
  public render() {
    const Container = styled("div")`
      display: flex;
      width: 160px;
      height: 160px;
      background-color: rgba(66, 123, 172, 0.2);
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    `;
    const SubContainer = styled(Container)`
      width: 120px;
      height: 120px;
      background-color: rgba(66, 123, 172, 0.2);
    `;
    const Content = styled(Container)`
      width: 75px;
      height: 75px;
      background: radial-gradient(
        ${this.props.firstColor},
        ${this.props.secondColor}
      );
    `;

    return (
      <Container>
        <SubContainer>
          <Content>{this.props.content}</Content>
        </SubContainer>
      </Container>
    );
  }
}
