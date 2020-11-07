import styled from "styled-components";

export const color = {
  red: "#f9423a",
  brown: "#a23530",
  darkGray: "#424749",
  gray: "#6e7679",
  lightGray: "#e2e4e4",
  outlineGray: "#f1f1f2",
  white: "#ffffff",
};

const size = {
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  /* @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  } */
`;

export const Body = styled.div`
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const DateText = styled.p`
  margin: 0 0 16px 16px;
  font-size: 14px;
  font-weight: bold;
`;
