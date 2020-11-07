import React from "react";

import { GroupButton, Button, Container } from "./styles";

const TabButton = ({ eatTime, setEatTime }) => {
  const handleClick = (d) => {
    setEatTime(d);
  };

  return (
    <Container>
      <GroupButton>
        <Button
          disabled={eatTime === "Lunch" ? false : true}
          onClick={() => handleClick("Lunch")}
        >
          Lunch
        </Button>
        <Button
          disabled={eatTime === "Dinner" ? false : true}
          onClick={() => handleClick("Dinner")}
        >
          Dinner
        </Button>
      </GroupButton>
    </Container>
  );
};

export default TabButton;
