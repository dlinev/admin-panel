import { GET_ORDERS_SUCCESS } from "../constants";

const initialState = [];

export const orderReducer = (state = initialState, { action, payload }) => {
  switch (action) {
    case GET_ORDERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
