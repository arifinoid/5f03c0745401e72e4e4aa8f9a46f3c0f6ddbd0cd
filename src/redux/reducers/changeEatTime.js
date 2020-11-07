import { CHANGE_EAT_TIME } from "../actions/changeEatTime";

const initialState = {
  eatTime: "Lunch",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EAT_TIME:
      const { eatTime } = action.payload;
      return {
        ...state,
        eatTime,
      };

    default:
      return state;
  }
};

export default cartReducer;
