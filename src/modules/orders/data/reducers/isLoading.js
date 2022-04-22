const initialState = false;

export const isLoading = (state = initialState, { type }) => {
  if (type.includes("_START")) {
    return true;
  } else if (type.includes("_SUCCESS") || type.includes("_FAIL")) {
    return false;
  }
  return state;
};
