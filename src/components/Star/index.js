import React from "react";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import Icon from "../Icon";
import { color } from "../../globalStyle";

const Star = ({ rating }) => {
  const hasHalf = !!(rating % 1);

  const full = [...Array(parseInt(rating))].map((_, index) => {
    return <Icon icon={faStar} strokeColor={color.red} key={index} />;
  });

  const half = full.push(
    [...Array(parseInt(1))].map((_, index) => {
      return <Icon icon={faStarHalf} strokeColor={color.red} key={index} />;
    })
  );

  if (hasHalf) return full;
  return half;
};

export default Star;
