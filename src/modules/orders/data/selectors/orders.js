import { createSelector } from "reselect";

import { getSearchLine } from "./getSearchLine";
import { getOrders } from "./getOrders";
import { getSelectedOrders } from "./getSelectedOrders";
import { getSortFields } from "./getSortFields";

import lodash from "lodash";

export const getFilteredOrders = createSelector(
  getOrders,
  getSearchLine,
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

export const getSortedOrders = createSelector(
  getFilteredOrders,
  getSortFields,
  (orders, sortFields) => lodash.orderBy(orders, sortFields)
);
