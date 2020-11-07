export const CHANGE_EAT_TIME = `CHANGE_EAT_TIME`;
export const CHANGE_EAT_TIME_SUCCESS = `CHANGE_EAT_TIME_SUCCESS`;

export const changeEatTime = (eatTime) => async (dispatch) => {
  dispatch({
    type: CHANGE_EAT_TIME,
    payload: {
      eatTime,
    },
  });

  try {
    dispatch({
      type: CHANGE_EAT_TIME_SUCCESS,
      payload: {
        eatTime,
      },
    });
  } catch (err) {
    return err;
  }
};
