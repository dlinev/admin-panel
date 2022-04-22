import { SET_SORT_ORDERS, SORT_ASCENDING, SORT_DESCENDING } from "../constants";
const initialState = [];

const setSortOrders = (state, payload) => {
  const indexSort = state.findIndex((item) => item.field === payload);
  if (indexSort >= 0) {
    state[indexSort].sorting =
      state[indexSort].sorting === SORT_DESCENDING
        ? SORT_ASCENDING
        : SORT_DESCENDING;
    return state;
  } else {
    return [...state, { field: payload, sorting: SORT_ASCENDING }];
  }
};

export const sortFields = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SORT_ORDERS:
      return setSortOrders(state, payload);
    default:
      return state;
  }
};
