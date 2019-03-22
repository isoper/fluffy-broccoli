import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";

type ContainerProps = {};

export default styled("div")`
  max-width: ${rem("1070px")};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  overflow: hidden;
`;
