import React from "react";
import { connect } from "react-redux";

import { GroupButton, Button, Container } from "./styles";

import { changeEatTime } from "../../redux/actions/changeEatTime";

const TabButton = (props) => {
  const { eatTime } = props;
  const handleClick = (eatTime) => {
    props.changeEatTime(eatTime);
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

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  changeEatTime,
};
export default connect(mapStateToProps, mapDispatchToProps)(TabButton);
