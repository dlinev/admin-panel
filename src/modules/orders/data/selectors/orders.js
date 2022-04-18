import { createSelector } from "reselect";

import { COUNT_LINES_ON_PAGE } from "../constants";

import { getSearchLine } from "./getSearchLine";
import { getOrders } from "./getOrders";
import { getSelectedOrders } from "./getSelectedOrders";
import { getSortFields } from "./getSortFields";
import { getFilterOrders } from "./getFilterOrders";

import lodash from "lodash";
import { getCurrentPage } from "./getCurrentPage";

export const getFilteredOrders = createSelector(
  getOrders,
  getSearchLine,
  getFilterOrders,
  getCurrentPage,
  (orders, search, filterOrders, currentPage) =>
    orders
      .filter(
        ({ orderId, orderClient }) =>
          orderId.includes(search) || orderClient.includes(search)
      )
      .filter(
        ({ orderDate, orderSum, orderStatus }) =>
          (orderDate >= filterOrders.dateFrom &&
            orderDate <= filterOrders.dateTo) ||
          (orderSum >= filterOrders.sumFrom && orderSum <= filterOrders.sumTo)
        // filterOrders.orderStatus.includes(orderStatus)
      )
      .slice(
        (currentPage - 1) * COUNT_LINES_ON_PAGE,
        currentPage * COUNT_LINES_ON_PAGE
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
