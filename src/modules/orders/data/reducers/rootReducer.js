import { combineReducers } from "redux";
import { orders } from "./orders";
import { filterReducer } from "./filterReducer";
import { searchLine } from "./searchLine";
import { isLoading } from "./isLoading";

export default combineReducers({
  orders,
  filterReducer,
  searchLine,
  isLoading,
});
