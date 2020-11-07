import styled from "styled-components";

import { color } from "../../globalStyle";

export const GroupButton = styled.div`
  width: calc(100% - 32px);
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid 1px ${color.lightGray};
  border-radius: 6px;
  overflow: hidden;
`;

export const Button = styled.a`
  width: 50%;
  cursor: ${({ disabled }) => (disabled ? "pointer" : "disabled")};
  color: ${({ disabled }) => (disabled ? color.gray : color.white)};
  text-align: center;
  font-size: 12px;
  padding: 8px;
  background-color: ${({ disabled }) =>
    disabled ? color.white : color.darkGray};
`;

export const Container = styled.div`
  padding: 0 16px;
  padding-top: 96px;
  width: 100%;
`;
