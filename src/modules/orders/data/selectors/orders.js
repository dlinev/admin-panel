import { createSelector } from "reselect";

import { getSearchLine } from "./getSearchLine";
import { getOrders } from "./getOrders";
import { getSelectedOrders } from "./getSelectedOrders";
import { getSortFields } from "./getSortFields";

export const getFilteredOrders = createSelector(
  getOrders,
  getSearchLine,
  getSortFields,

  (orders, search, sortFields) =>
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
