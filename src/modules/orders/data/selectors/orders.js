import { createSelector } from "reselect";

import { COUNT_LINES_ON_PAGE } from "../constants";

import { getSearchLine } from "./getSearchLine";
import { getAllOrders } from "./getAllOrders";
import { getSelectedOrders } from "./getSelectedOrders";
import { getSortFields } from "./getSortFields";
import { getFilterOrders } from "./getFilterOrders";

import { getCurrentPage } from "./getCurrentPage";
import { sortBy, parseStringToDate } from "../../utils";

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
      .filter(({ orderDate }) => {
        const date = parseStringToDate(orderDate);
        const dateFrom = parseStringToDate(filterOrders.dateFrom);
        const dateTo = parseStringToDate(filterOrders.dateTo);

        return date >= dateFrom && date <= dateTo;
      })
      .filter(({ orderSum }) =>
        parseInt(orderSum) >= filterOrders.sumFrom > 0
          ? filterOrders.sumFrom
          : 0 && parseInt(orderSum) <= filterOrders.sumTo > 0
          ? filterOrders.sumTo
          : 99999999999999
      )
  // .filter(
  //   ({ orderStatus }) =>
  //     filterOrders.orderStatus.includes(orderStatus)
  // )
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

export const getCountOrders = createSelector(
  getFilteredOrders,
  (orders) => orders.length
);
