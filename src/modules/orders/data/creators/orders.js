import {
  GET_ORDERS,
  SEARCH_ORDERS,
  GET_SELECT_ORDERS,
  SET_SELECTED_ORDERS_LINE,
} from "../constants";

export const searchOrders = (payload) => ({
  type: SEARCH_ORDERS,
  payload,
});

export const getOrders = () => ({
  type: GET_ORDERS,
});

export const getSelectedOrders = (payload) => ({
  type: GET_SELECT_ORDERS,
  payload,
});

export const setSelectedOrdersLine = (state, payload, id) => ({
  type: SET_SELECTED_ORDERS_LINE,
  state,
  payload,
  id,
});
