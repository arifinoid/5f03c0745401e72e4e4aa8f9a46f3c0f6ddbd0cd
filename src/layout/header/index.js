import React from "react";
import Button from "../../components/ButtonWithIcon";
import Date from "../../components/Date";

import { color } from "../../globalStyle";
import {
  Container,
  InnerContainer,
  NavTitle,
  Caption,
  TitleContainer,
  DateContainer,
  Address,
} from "./styles";

const Header = ({ setLocSearchToggle, dateSelected, setDateSelected }) => {
  const handleClick = () => {
    setLocSearchToggle(true);
  };

  return (
    <Container>
      <InnerContainer>
        <Button
          color={color.darkGray}
          icon="arrow_back"
          width="30px"
          height="30px"
        />
        <NavTitle onClick={handleClick}>
          <Caption>ALAMAT PENGANTARAN</Caption>
          <TitleContainer>
            <Address>Tokopedia Tower</Address>
            <Button
              color={color.red}
              icon="expand_more"
              width="20px"
              height="20px"
            />
          </TitleContainer>
        </NavTitle>
      </InnerContainer>
      <DateContainer>
        <Date dateSelected={dateSelected} setDateSelected={setDateSelected} />
      </DateContainer>
    </Container>
  );
};

export default Header;
