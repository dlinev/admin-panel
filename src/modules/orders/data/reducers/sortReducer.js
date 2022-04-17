import { SORT_ORDERS } from "../constants";
const initialState = [];

export const sortReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SORT_ORDERS:
      return payload;
    default:
      return state;
  }
};
