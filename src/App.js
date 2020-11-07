import React, { useState } from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";

import TabButton from "./components/TabButton";
import CardMenu from "./components/Card";
import Cart from "./components/Cart";
import Location from "./components/Location";
import { Container, Body, DateText } from "./globalStyle";
import Header from "./layout/header";

const App = (props) => {
  const { cartValues, products } = props.cart;
  const { eatTime } = props.eatTime;
  const [date, setDate] = useState(Date.now());

  const [location, setLocation] = useState(false);

  return (
    <Container>
      <Header
        setLocSearchToggle={setLocation}
        dateSelected={date}
        setDateSelected={setDate}
      />
      <TabButton eatTime={eatTime} />
      <DateText>{dayjs(date).format("dddd, DD MMMM YYYY")}</DateText>
      <Body>
        {products.map((product) => {
          const {
            id,
            productName,
            image,
            seller,
            price,
            currency,
            rating,
            eatTime,
          } = product;

          return (
            <CardMenu
              visibility={eatTime === props.eatTime.eatTime}
              productName={productName}
              image={image}
              eatTime={eatTime}
              rating={rating}
              key={id}
              seller={seller}
              price={price}
              currency={currency}
            />
          );
        })}
      </Body>
      {cartValues !== 0 && <Cart />}
      {location && <Location setLocSearchToggle={setLocation} />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  eatTime: state.eatTime,
});

export default connect(mapStateToProps, null)(App);
