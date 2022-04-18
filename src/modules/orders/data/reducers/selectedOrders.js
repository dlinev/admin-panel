import {
  SET_SELECTED_ORDERS_LINE,
  CLEAR_SELECTED_ORDERS_LINE,
  SET_SELECTED_ORDERS_ALL,
  CLEAR_SELECTED_ORDERS_ALL,
} from "../constants";

const initialState = [];

export const selectedOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_ORDERS_LINE:
      return [...state, payload];
    case CLEAR_SELECTED_ORDERS_LINE:
      return state.filter((orderId) => orderId !== payload);
    case SET_SELECTED_ORDERS_ALL:
      return state; //TODO
    case CLEAR_SELECTED_ORDERS_ALL:
      return [];
    default:
      return state;
  }
};
