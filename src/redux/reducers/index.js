import { combineReducers } from "redux";
import cart from "./cart";
import eatTime from "./changeEatTime";

const rootReducers = combineReducers({
  cart,
  eatTime,
});

export default rootReducers;
