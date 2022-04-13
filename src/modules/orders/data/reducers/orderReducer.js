import { SEARCH_ORDERS } from "../constants";
import initialState from "../orders.json";

export const orderReducer = (state = initialState, { action, payload }) => {
  switch (action) {
    case SEARCH_ORDERS:
      if (payload) {
        return state.filter((item) => item.orderId.includes(payload));
      } else {
        return state;
      }

    default:
      return state;
  }
};
