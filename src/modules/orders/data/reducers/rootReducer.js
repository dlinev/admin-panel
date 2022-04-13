import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { filterReducer } from "./filterReducer";
import { searchLine } from "./searchLine";
import { isLoading } from "./isLoading";

export default combineReducers({
  orderReducer,
  filterReducer,
  searchLine,
  isLoading,
});
