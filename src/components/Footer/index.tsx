import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { navigateTo } from "gatsby-link";

import { colors, mq } from "./../../utils/theme";
import Title from "./../../components/Title";
import _Container from "./../../components/Container";

interface FooterProps {}
interface FooterState {}

const Footer = styled("footer")`
  background-image: linear-gradient(
    180deg,
    ${colors.blue},
    ${colors.darkBlue}
  );
  color: #fff;
  padding-top: ${rem("90px")};
  ${mq[3]} {
    padding-top: ${rem("120px")};
  }
`;

const Container = styled(_Container)`
  display: flex;
  justify-content: flex-start;
  ${mq[0]} {
    flex-direction: column;
    align-items: center;
  }
  ${mq[1]} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const FooterGrid = styled("div")`
`

const FooterLogoGrid = styled("div")`
  ${mq[0]} {
    margin-bottom: 20px;
  }
`

const Grid = styled("div")`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  ${mq[0]} {
    flex-direction: column;
    text-align: center;
  }
  ${mq[1]} {
    flex-direction: row;
    text-align: left;
  }
`;

const FlagsGrid = styled("div")`
  display: flex;
  justify-content: flex-end;
`

const Heading = styled('p')`
  font-size: 16px;
  margin: 0;
`
const FooterInfo = styled('p')`
  font-size: 13px;
  opacity: 0.5;
`

const CopyRight = styled('p')`
  font-size: 12px;
  opacity: 0.5;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 0;
  text-align: center;
`

export default class extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps, context: any) {
    super(props, context);
  }

  public render() {
    return (
      <Footer>
        <Container>
          <FooterLogoGrid>Logo Logo</FooterLogoGrid>
          <Grid>
            <FooterGrid>
              <Heading>Address</Heading>
              <FooterInfo>
                Deko Kovacev 11 <br /> 1480 Gevgelija <br /> North Macedonia
              </FooterInfo>
            </FooterGrid>
            <FooterGrid>
              <Heading>Get in touch</Heading>
              <FooterInfo>contact@ludotech.co</FooterInfo>
            </FooterGrid>
            <FooterGrid>
              <Heading>Follow us</Heading>
              <FooterInfo>Test</FooterInfo>
            </FooterGrid>
          </Grid>
          <FlagsGrid>Flag Flag</FlagsGrid>
        </Container>
        <CopyRight>© Ludō 2019</CopyRight>
      </Footer>
    );
  }
}
