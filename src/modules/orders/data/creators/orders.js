import { GET_ORDERS, SEARCH_ORDERS } from "../constants";

export const searchOrders = (payload) => ({
  action: SEARCH_ORDERS,
  payload,
});

export const getOrders = () => ({
  action: GET_ORDERS,
});
