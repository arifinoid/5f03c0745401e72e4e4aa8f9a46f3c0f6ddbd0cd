import React, { useState } from "react";
import dayjs from "dayjs";
import { Provider } from "react-redux";

import TabButton from "./components/TabButton";
import CardMenu from "./components/Card";
import Cart from "./components/Cart";
import Location from "./components/Location";
import { Container, Body, DateText } from "./globalStyle";
import Header from "./layout/header";

import store from "./redux/store";

const App = () => {
  const [date, setDate] = useState(Date.now());
  const [eatTime, setEatTime] = useState("Lunch");
  const [location, setLocation] = useState(false);
  const [cartValue, setCartValue] = useState(0);

  const Pizza = "assets/pizza.jpg";
  return (
    <Provider store={store}>
      <Container>
        <Header
          setLocSearchToggle={setLocation}
          dateSelected={date}
          setDateSelected={setDate}
        />
        <TabButton eatTime={eatTime} setEatTime={setEatTime} />
        <DateText>{dayjs(date).format("dddd, DD MMMM YYYY")}</DateText>
        <Body>
          <CardMenu
            image={Pizza}
            eatTime={eatTime}
            cartValue={cartValue}
            setCartValue={setCartValue}
            rating={2.5}
          />

          <CardMenu
            image={Pizza}
            eatTime={eatTime}
            cartValue={cartValue}
            setCartValue={setCartValue}
            rating={3.5}
          />
          <CardMenu
            image={Pizza}
            eatTime={eatTime}
            cartValue={cartValue}
            setCartValue={setCartValue}
            rating={3.5}
          />
          <CardMenu
            image={Pizza}
            eatTime={eatTime}
            cartValue={cartValue}
            setCartValue={setCartValue}
            rating={3.5}
          />
          <CardMenu
            image={Pizza}
            eatTime={eatTime}
            cartValue={cartValue}
            setCartValue={setCartValue}
            rating={3.5}
          />
        </Body>
        {cartValue && <Cart cartValue={cartValue} />}
        {location && <Location setLocSearchToggle={setLocation} />}
      </Container>
    </Provider>
  );
};

export default App;
