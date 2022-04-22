import { createSelector } from "reselect";

import { COUNT_LINES_ON_PAGE } from "../constants";

import { getSearchLine } from "./getSearchLine";
import { getAllOrders } from "./getAllOrders";
import { getSelectedOrders } from "./getSelectedOrders";
import { getSortFields } from "./getSortFields";
import { getFilterOrders } from "./getFilterOrders";

import { getCurrentPage } from "./getCurrentPage";
import { sortBy, filterByDate, filterBySum, filterByStatus } from "../../utils";

export const getCountSelectedOrders = createSelector(
  getSelectedOrders,
  (selected) => selected.length
);

export const hasSelectedOrders = createSelector(
  getSelectedOrders,
  (selected) => selected.length > 0
);

export const getSortedOrders = createSelector(
  getAllOrders,
  getSortFields,
  (orders, sortFields) => sortBy(orders, sortFields)
);

export const getSearchedOrders = createSelector(
  getSortedOrders,
  getSearchLine,
  (orders, search) =>
    orders.filter(
      ({ orderId, orderClient }) =>
        orderId.includes(search) || orderClient.includes(search)
    )
);

export const getFilteredOrders = createSelector(
  getSearchedOrders,
  getFilterOrders,
  (orders, filterOrders) =>
    orders

      .filter(({ orderSum }) =>
        filterBySum(orderSum, filterOrders.sumFrom, filterOrders.sumTo)
      )
      .filter(({ orderDate }) =>
        filterByDate(orderDate, filterOrders.dateFrom, filterOrders.dateTo)
      )
      .filter(({ orderStatus }) =>
        filterByStatus(orderStatus, filterOrders.status)
      )
);

export const getOrders = createSelector(
  getFilteredOrders,
  getCurrentPage,
  (orders, currentPage) =>
    orders.slice(
      (currentPage - 1) * COUNT_LINES_ON_PAGE,
      currentPage * COUNT_LINES_ON_PAGE
    )
);

export const getCountVisibleOrders = createSelector(
  getOrders,
  (orders) => orders.length
);

export const getCountOrders = createSelector(
  getFilteredOrders,
  (orders) => orders.length
);

export const getCountAllOrders = createSelector(
  getAllOrders,
  (orders) => orders.length
);

export const getIsAllSelected = createSelector(
  getCountSelectedOrders,
  getCountVisibleOrders,
  (selectedCount, orderCount) => selectedCount == orderCount
);
