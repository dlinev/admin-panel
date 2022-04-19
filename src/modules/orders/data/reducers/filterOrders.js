import { SET_FILTRED_ORDERS, CLEAR_FILTRED_ORDERS } from "../constants";

const initialState = {
  dateFrom: "01.01.2000",
  dateTo: "31.12.2099",
  sumFrom: "1",
  sumTo: "999999999",
  status: {},
};

export const filterOrders = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_FILTRED_ORDERS:
      return {};

    case SET_FILTRED_ORDERS:
      return payload;

    default:
      return state;
  }
};
