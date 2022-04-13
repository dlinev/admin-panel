import {
  CLEAR_SEARCH_ORDERS_LINE,
  SEARCH_ORDERS,
  SET_SEARCH_ORDERS_LINE,
} from "../constants";

export const createSetSearhOrdersLine = (payload) => ({
  action: SET_SEARCH_ORDERS_LINE,
  payload,
});

export const createClearSearchOrdersLine = () => ({
  action: CLEAR_SEARCH_ORDERS_LINE,
});

export const createSearch = (payload) => ({
  action: SEARCH_ORDERS,
  payload,
});
