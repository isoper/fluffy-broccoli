import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";

import { mq } from "./../../utils/theme";

type ContainerProps = {};

export default styled("div")`
  max-width: ${rem("1070px")};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${mq[0]} {
    padding-left: ${rem("12px")};
    padding-right: ${rem("12px")};
  }
  ${mq[2]} {
    padding-left: ${rem("50px")};
    padding-right: ${rem("50px")};
  }
`;
