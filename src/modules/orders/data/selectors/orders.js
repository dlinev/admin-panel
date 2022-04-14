import { createSelector } from "reselect";

import { getSearchLine } from "./searchLine";
import { getOrders } from "./getOrders";
import { getSelectedOrders } from "./getSelectedOrders";

export const getFilteredOrders = createSelector(
  getOrders,
  getSearchLine,
  (orders, search) =>
    orders.filter(
      ({ orderId, orderClient }) =>
        orderId.includes(search) || orderClient.includes(search)
    )
);

export const getCountOrders = createSelector(
  getOrders,
  (orders) => orders.length
);

export const getCountSelectedOrders = createSelector(
  getSelectedOrders,
  (selected) => selected.reduce((count, item) => count + item, 0)
);
