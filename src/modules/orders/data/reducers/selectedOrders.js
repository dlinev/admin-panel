import {
  SET_SELECTED_ORDERS_LINE,
  CLEAR_SELECTED_ORDERS_LINE,
} from "../constants";

const initialState = [];

export const selectedOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_ORDERS_LINE:
      return [...state, payload];
    case CLEAR_SELECTED_ORDERS_LINE:
      return state.filter((orderId) => orderId !== payload);
    default:
      return state;
  }
};
