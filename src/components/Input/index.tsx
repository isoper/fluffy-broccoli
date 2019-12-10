import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";
import { colors, mq } from "./../../utils/theme";

type InputProps = {
  placeholder: string;
  area: boolean;
};

const InputContainer = styled("div")`
  position: relative;
`;

const Input = styled("input")`
  display: block;
  margin: 0;
  height: ${({ area }) => (area ? "20vh" : "")};
  padding: 0.8rem 1.6rem;
  width: 100%;
  line-height: 1.8;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow 300ms;
  box-shadow: ${colors.inputBoxShadow};
  outline: none;
`;

export default (props: InputProps) => {
  return (
    <InputContainer>
      <Input {...props} />
    </InputContainer>
  );
};
