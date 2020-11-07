import styled from "styled-components";

import { color } from "../../globalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
  background-color: #fff;
  border-style: hidden;
  flex: 0 0 22%;
  margin: 16px 12px;

  :not(:last-of-type) {
    margin-right: 24px;
  }
`;

export const InnerContainer = styled.div``;
export const ImageContainer = styled.div`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CardImage = styled.img`
  width: inherit;
`;

export const CardCaption = styled.div`
  width: calc(100% - 16px);
  line-height: 1.5;
  padding: 0 8px;
  height: 90px;
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Star = styled.div`
  color: ${color.gray};
  font-size: 12px;
  font-weight: bold;
  margin-right: 4px;
`;

export const Text = styled.h4`
  margin: 0;
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
`;

export const SellerText = styled.p`
  margin: 0;
  color: ${color.gray};
  font-size: 8px;
  font-weight: 500;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  background-color: ${color.red};
  width: 70px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background-color: ${color.brown};
  }
`;
