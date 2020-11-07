import styled from "styled-components";

import { color } from "../../globalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  width: 100%;
  line-height: 1;
  padding: 12px 4px 0 4px;
  background-color: white;
  border-bottom: solid 1px ${color.lightGray};
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

export const NavTitle = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Caption = styled.h3`
  margin: 0;
  padding: 0;
  color: ${color.gray};
  font-size: 8px;
`;

export const Address = styled.h1`
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-right: 4px;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
`;
