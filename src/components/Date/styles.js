import styled from "styled-components";

import { color } from "../../globalStyle";

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 16px;
  &::-webkit-scrollbar {
    height: 0;
    background: transparent;
  }
`;

export const DateButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  background-color: ${({ active }) => (active ? color.darkGray : color.white)};
  color: ${({ disabled }) => (disabled ? color.lightGray : undefined)};
  cursor: ${({ disabled }) => (!disabled ? "pointer" : undefined)};
  border-radius: 50%;
  border: 0;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const DayText = styled.p`
  margin: 0;
  text-align: center;
  font-size: 8px;
  color: ${({ disabled }) =>
    !disabled
      ? ({ active }) => (active ? color.outlineGray : color.gray)
      : undefined};
`;

export const DateText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${({ disabled }) =>
    !disabled
      ? ({ active }) => (active ? color.white : color.darkGray)
      : undefined};
`;
