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
  (selected) => selected.length
);

export const hasSelectedOrders = createSelector(
  getSelectedOrders,
  (selected) => selected.length > 0
);

export const sortOrders = createSelector(getOrders, (orders) => orders.sort());
