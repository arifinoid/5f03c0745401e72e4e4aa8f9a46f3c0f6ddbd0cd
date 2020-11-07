import styled from "styled-components";

import { color } from "../../globalStyle";

export const Button = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  border-radius: 50%;
  padding: 0;
  border: 0;
  &:hover {
    background-color: ${color.outlineGray};
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
    color: black;
    background-color: ${color.lightGray};
  }
`;
