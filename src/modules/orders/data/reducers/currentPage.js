import { SET_CURRENT_PAGE } from "../constants";

const initialState = "";

export const currentPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return payload;

    default:
      return state;
  }
};
