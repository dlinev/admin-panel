import {
  CLEAR_SEARCH_ORDERS_LINE,
  SEARCH_ORDERS,
  SET_SEARCH_ORDERS_LINE,
} from "../constants";

export const createSetSearhOrdersLine = (payload) => ({
  type: SET_SEARCH_ORDERS_LINE,
  payload,
});

export const createClearSearchOrdersLine = () => ({
  type: CLEAR_SEARCH_ORDERS_LINE,
});

export const createSearch = (payload) => ({
  type: SEARCH_ORDERS,
  payload,
});
