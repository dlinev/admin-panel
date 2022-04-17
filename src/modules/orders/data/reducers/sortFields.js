import { GET_SORT_ORDERS } from "../constants";
const initialState = [];

export const sortFields = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SORT_ORDERS:
      return [...state, payload];
    default:
      return state;
  }
};
