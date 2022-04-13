import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { rootReducer } from "./rootReducer";

export default combineReducers({
  rootReducer,
  orderReducer,
});
