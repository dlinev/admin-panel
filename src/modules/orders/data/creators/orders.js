import {
  GET_ORDERS,
  SEARCH_ORDERS,
  GET_SELECT_ORDERS,
  SET_SELECTED_ORDERS_LINE,
  CLEAR_SELECTED_ORDERS_LINE,
  SORT_ORDERS,
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

export const setSelectedOrdersLine = (payload) => ({
  type: SET_SELECTED_ORDERS_LINE,
  payload,
});

export const clearSelectedOrdersLine = (payload) => ({
  type: CLEAR_SELECTED_ORDERS_LINE,
  payload,
});

export const sortOrders = (payload) => ({
  type: SORT_ORDERS,
  payload,
});
