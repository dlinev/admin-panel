import { combineReducers } from "redux";
import { orders } from "./orders";
import { selectedOrders } from "./selectedOrders";
import { sortFields } from "./sortFields";
import { filterOrders } from "./filterOrders";
import { searchLine } from "./searchLine";
import { isLoading } from "./isLoading";

export default combineReducers({
  orders,
  selectedOrders,
  sortFields,
  filterOrders,
  searchLine,
  isLoading,
});
