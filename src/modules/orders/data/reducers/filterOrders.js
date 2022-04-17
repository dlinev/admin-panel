import { CLEAR_SEARCH_ORDERS_LINE, SEARCH_ORDERS } from "../constants";

const initialState = "";

export const filterOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_SEARCH_ORDERS_LINE:
      return "";

    case SEARCH_ORDERS:
      return payload;

    default:
      return state;
  }
};
