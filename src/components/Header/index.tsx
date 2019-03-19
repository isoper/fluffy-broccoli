import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { FaArrowDown } from "react-icons/fa";

import { colors } from "./../../utils/theme";
import Button from "./../Button";
import Container from "./../../components/Container";

interface HeaderProps {}

export default class extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps, context: any) {
    super(props, context);
  }
  public render() {
    const Section = styled("section")`
      display: flex;
      align-items: center;
      min-height: 80vh;
      padding-top: ${rem("90px")};
      background-image: linear-gradient(
        153deg,
        ${colors.primary} 0%,
        ${colors.secondary} 100%
      );
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

    const MoreButton = styled("div")`
      margin: 0 auto;
      margin-top: ${rem("90px")};
      color: white;
      font-size: 25px;
      padding-left: 8px;
      padding-top: 5px;
      width: 50px;
      height: 50px;
      opacity: 0.8;
      background-color: rgba(0, 0, 0, 0.6);
      background-clip: padding-box;
      border: 4px solid rgba(0, 0, 0, 0.3);
      border-radius: 25px;
      cursor: pointer;
    `;

    return (
      <Section>
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
          <MoreButton>
            <FaArrowDown />
          </MoreButton>
        </Container>
      </Section>
    );
  }
}
