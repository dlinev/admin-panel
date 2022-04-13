import { CLEAR_SEARCH_ORDERS_LINE, SET_SEARCH_ORDERS_LINE } from "../constants";

const initialState = "";

export const searchLine = (state = initialState, { action, payload }) => {
  switch (action) {
    case CLEAR_SEARCH_ORDERS_LINE:
      return "";

    case SET_SEARCH_ORDERS_LINE:
      return payload;

    default:
      return state;
  }
};
