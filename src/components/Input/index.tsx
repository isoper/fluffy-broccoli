import * as React from "react";
import { rem } from "polished";
import styled from "@emotion/styled";
import { css } from "emotion";

type InputProps = {
  placeholder: string;
  area: boolean;
};

export default (props: InputProps) => {
  const InputContainer = styled("div")`
    position: relative;
  `;

  const Input = styled(props.area ? "textarea" : "input")`
    display: block;
    margin: 0;
    height: ${props.area ? "20vh" : ""};
    padding: 0.8rem 1.6rem;
    width: 100%;
    line-height: 1.8;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;
    box-shadow: 0.2rem 0.8rem 0.8rem #e0e0e0;
    outline: none;
  `;
  return (
    <InputContainer>
      <Input
        type="text"
        id="input"
        class="Input-text"
        placeholder={props.placeholder}
      />
    </InputContainer>
  );
};
