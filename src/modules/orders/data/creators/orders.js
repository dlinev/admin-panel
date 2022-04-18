import {
  GET_ORDERS,
  SEARCH_ORDERS,
  GET_SELECT_ORDERS,
  SET_SELECTED_ORDERS_LINE,
  CLEAR_SELECTED_ORDERS_LINE,
  GET_SORT_ORDERS,
  SET_SELECTED_ORDERS_ALL,
  CLEAR_SELECTED_ORDERS_ALL,
  SET_CURRENT_PAGE,
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

export const setSelectedOrdersAll = () => ({
  type: SET_SELECTED_ORDERS_ALL,
});

export const clearSelectedOrdersAll = () => ({
  type: CLEAR_SELECTED_ORDERS_ALL,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});

export const sortOrders = (payload) => ({
  type: GET_SORT_ORDERS,
  payload,
});
