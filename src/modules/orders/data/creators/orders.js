import { SEARCH_ORDERS } from "../constants";

export const searchOrders = (payload) => ({
  type: SEARCH_ORDERS,
  payload,
});
