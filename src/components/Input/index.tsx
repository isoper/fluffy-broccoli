import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { colors } from "./../../utils/theme";

type InputProps = {
  placeholder: string;
  area: boolean;
};

const InputContainer = styled("div")`
  position: relative;
  margin-top: -20px;
`;

const Input = styled("input")`
  display: block;
  margin: 0;
  height: ${({ area }) => (area ? "20vh" : "")};
  padding: 0.6rem;
  width: 100%;
  line-height: 1.8;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  box-shadow: ${colors.inputBoxShadow};
  outline: none;
  font-size: ${rem("14px")};
`;

export default (props: InputProps) => {
  return (
    <InputContainer>
      <Input {...props} />
    </InputContainer>
  );
};
