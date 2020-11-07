import styled from "styled-components";

import { color } from "../../globalStyle";

export const Container = styled.div`
  position: fixed;
  padding: 12px 12px 16px 12px;
  bottom: 0;
  width: calc(100% - 24px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.white};
  padding: 8px 8px 8px 12px;
  background-color: ${color.brown};
  border-radius: 4px;
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TextLarge = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

export const TextMedium = styled.h5`
  margin: 0;
  font-size: 12px;
  font-weight: 300;
`;
