const initialState = false;

export const isLoading = (state = initialState, { action }) => {
  if (action.includes("_START")) {
    return true;
  } else if (action.includes("_SUCCESS") || action.includes("_FAIL")) {
    return false;
  }
  return state;
};
