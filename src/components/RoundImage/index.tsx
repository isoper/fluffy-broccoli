import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

import { colors, mq } from "./../../utils/theme";

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
      ${mq[0]} {
        width: ${rem("75px")};
        height: ${rem("75px")};
      }
      ${mq[1]} {
        width: ${rem("100px")};
        height: ${rem("100px")};
      }
      ${mq[2]} {
        width: ${rem("150px")};
        height: ${rem("150px")};
      }
      background-color: rgba(252, 120, 0, 0.2);
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    `;
    const SubContainer = styled(Container)`
      ${mq[0]} {
        width: ${rem("55px")};
        height: ${rem("55px")};
      }
      ${mq[1]} {
        width: ${rem("75px")};
        height: ${rem("75px")};
      }
      ${mq[2]} {
        width: ${rem("100px")};
        height: ${rem("100px")};
      }
      background-color: rgba(252, 120, 0, 0.2);
    `;
    const Content = styled(Container)`
      ${mq[0]} {
        width: ${rem("35px")};
        height: ${rem("35px")};
      }
      ${mq[1]} {
        width: ${rem("45px")};
        height: ${rem("45px")};
      }
      ${mq[2]} {
        width: ${rem("55px")};
        height: ${rem("55px")};
      }
      background: ${colors.orange};
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
