import {
  SET_SELECTED_ORDERS_LINE,
  SET_SELECTED_ORDERS_ALL,
} from "../constants";

const initialState = [];

export const selectedOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_ORDERS_ALL: {
      return state.length == payload.length
        ? []
        : payload.map(({ orderId }) => orderId);
    }
    case SET_SELECTED_ORDERS_LINE: {
      return Object.keys(
        [...state, ...payload].reduce(
          ({ [id]: currentId, ...rest }, id) => ({
            ...rest,
            ...(currentId === id ? {} : { [id]: id }),
          }),
          {}
        )
      );
    }
    default:
      return state;
  }
};
