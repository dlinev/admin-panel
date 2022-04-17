import {
  SET_SELECTED_ORDERS_LINE,
  CLEAR_SELECTED_ORDERS_LINE,
} from "../constants";

const initialState = [];

export const selectedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_ORDERS_LINE:
      state.push(payload);
      return true;
    case CLEAR_SELECTED_ORDERS_LINE:
      let indexArray = state.indexOf(payload);
      if (indexArray !== -1) {
        state.splice(indexArray, 1);
      }
      return false;
    default:
      return state;
  }
};
