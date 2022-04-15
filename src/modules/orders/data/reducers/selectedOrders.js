import { GET_SELECT_ORDERS } from "../constants";

const initialState = [];

export const selectedOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SELECT_ORDERS:
      return payload;
    default:
      return state;
  }
};
