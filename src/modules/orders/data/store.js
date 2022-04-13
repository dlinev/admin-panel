import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { logger } from "./middlewares/logger.js";
import mockServer from "./middlewares/mockServer";

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, mockServer)
  );
  console.log("state", store.getState());
  return store;
}
