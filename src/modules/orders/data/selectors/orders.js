import { createSelector } from "reselect";
import { getSearchLine } from "./searchLine";

export const getOrders = ({ orders }) => orders;

export const getFilteredOrders = createSelector(
  getOrders,
  getSearchLine,
  (orders, search) =>
    orders.filter(
      ({ orderId, orderClient }) =>
        orderId.includes(search) || orderClient.includes(search)
    )
);
