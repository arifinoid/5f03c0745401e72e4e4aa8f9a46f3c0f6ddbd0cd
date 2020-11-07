import React from "react";
import dayjs from "dayjs";

import { Container, DateButton, DateText, DayText } from "./styles";

import { generateTwoWeeks } from "../../helpers";

const DateComponent = ({ dateSelected, setDateSelected }) => {
  const isActive = (d) =>
    new Date(dateSelected).getDate() === new Date(d).getDate() ? true : false;

  const handleClick = (d) => {
    setDateSelected(d);
  };

  return (
    <Container>
      {generateTwoWeeks().map((date, idx) => (
        <div key={idx}>
          {dayjs(date).format("ddd") === "Sat" ||
          dayjs(date).format("ddd") === "Sun" ? (
            <DateButton disabled>
              <DayText disabled>
                {dayjs(date).format("ddd").toUpperCase()}
              </DayText>
              <DateText disabled>{dayjs(date).format("DD")}</DateText>
            </DateButton>
          ) : (
            <DateButton
              active={isActive(date)}
              onClick={() => handleClick(date)}
            >
              <DayText active={isActive(date)}>
                {dayjs(date).format("ddd").toUpperCase()}
              </DayText>
              <DateText active={isActive(date)}>
                {dayjs(date).format("DD")}
              </DateText>
            </DateButton>
          )}
        </div>
      ))}
    </Container>
  );
};

export default DateComponent;
