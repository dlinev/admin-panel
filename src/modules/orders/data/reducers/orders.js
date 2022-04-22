import { GET_ORDERS_SUCCESS } from "../constants";

const initialState = [];

export const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
