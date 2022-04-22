import { SET_FILTRED_ORDERS, CLEAR_FILTRED_ORDERS } from "../constants";

const initialState = {};

export const filterOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_FILTRED_ORDERS:
      return {};

    case SET_FILTRED_ORDERS:
      return payload;

    default:
      return state;
  }
};
