export const ADD_PRODUCT = `ADD_PRODUCT`;
export const ADD_PRODUCT_SUCCESS = `ADD_PRODUCT_SUCCESS`;

export const addProduct = (qty, price) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: {
      qty,
      price,
    },
  });

  try {
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: {
        qty: qty + 1,
        price,
      },
    });
  } catch (err) {
    return err;
  }
};
