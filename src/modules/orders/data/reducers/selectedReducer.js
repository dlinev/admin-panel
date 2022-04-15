import { SET_SELECTED_ORDERS_LINE } from "../constants";

const initialState = [];

export const selectedReducer = (
  state = initialState,
  { type, payload, id }
) => {
  if (type === SET_SELECTED_ORDERS_LINE) {
    if (payload) {
      state.push(id);
    } else {
      let indexArray = state.indexOf(id);
      if (indexArray !== -1) {
        state.splice(indexArray, 1);
      }
    }
  }
  return state;
};
