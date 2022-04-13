import { CLEAR_SEARCH_ORDERS_LINE, SEARCH_ORDERS } from "../constants";

const initialState = "";

export const filterReducer = (state = initialState, { action, payload }) => {
  switch (action) {
    case CLEAR_SEARCH_ORDERS_LINE:
      return "";

    case SEARCH_ORDERS:
      return payload;

    default:
      return state;
  }
};
