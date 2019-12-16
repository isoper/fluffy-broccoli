import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { FaLinkedin, FaInstagram} from "react-icons/fa";

import { colors, mq } from "./../../utils/theme";
import _Container from "./../../components/Container";

interface FooterProps {
  data: any;
}
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
    margin-bottom: 10px;
  }
  ${mq[1]} {
    flex-direction: row;
    text-align: left;
    margin-bottom: 0;
  }
`;

const ImgLogo = styled(Img)`
  cursor: pointer
`

const FlagsGrid = styled("div")`
  display: flex;
  justify-content: flex-end;
  ${mq[0]} {
    margin: 10px;
    & div {
      margin: 0 10px;
    }
    & div:not(:first-of-type) {
      opacity: 0.3;
    }
  }
  ${mq[1]} {
    margin: 0;
    & div {
      margin: 0;
    }
    & div:not(:first-of-type) {
      opacity: 0.3;
      margin-left: 10px;
    }
  }
`;

const FlagImg = styled(Img)`
  cursor: pointer;
`;

const Heading = styled('p')`
  font-size: 16px;
  margin: 0;
`
const FooterInfo = styled('p')`
  font-size: ${rem("9px")};
  opacity: 0.5;
`

const Icons = styled("div")`
  font-size: ${rem("16px")};
  opacity: 0.4;
  ${mq[0]} {
    & a {
      margin: 0 10px;
    }
  }
  ${mq[1]} {
    & a {
      margin: 0;
    }
    & a:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

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
          <FooterLogoGrid>
            <Link to="/">
              <ImgLogo
                fixed={this.props.data.lightLogo.childImageSharp.fixed}
                fadeIn={false}
              />
            </Link>
          </FooterLogoGrid>
          <Grid>
            <FooterGrid>
              <Heading>Address</Heading>
              <FooterInfo>
                7-mi Noemvri 72 <br /> 1480 Gevgelija <br /> North Macedonia
              </FooterInfo>
            </FooterGrid>
            <FooterGrid>
              <Heading>Get in touch</Heading>
              <FooterInfo>contact@ludotech.co</FooterInfo>
            </FooterGrid>
            <FooterGrid>
              <Heading>Follow us</Heading>
              <Icons>
                <a
                  href="https://www.linkedin.com/company/14060236/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                {/* <a href="/" target="_blank">
                  <FaTwitter />
                </a> */}
                <a href="https://www.instagram.com/ludo.tech/" target="_blank">
                  <FaInstagram />
                </a>
              </Icons>
            </FooterGrid>
          </Grid>
          <FlagsGrid>
            <FlagImg fixed={this.props.data.enFlag.childImageSharp.fixed} />
            <FlagImg fixed={this.props.data.frFlag.childImageSharp.fixed} />
            <FlagImg fixed={this.props.data.mkFlag.childImageSharp.fixed} />
          </FlagsGrid>
        </Container>
        <CopyRight>© Ludō 2019</CopyRight>
      </Footer>
    );
  }
}
