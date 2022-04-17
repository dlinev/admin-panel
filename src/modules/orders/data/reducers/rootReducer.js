import { combineReducers } from "redux";
import { orders } from "./orders";
import { selectedOrders } from "./selectedOrders";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";
import { selectedReducer } from "./selectedReducer";
import { searchLine } from "./searchLine";
import { isLoading } from "./isLoading";

export default combineReducers({
  orders,
  selectedOrders,
  filterReducer,
  selectedReducer,
  sortReducer,
  searchLine,
  isLoading,
});
