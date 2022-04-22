import { GET_ORDERS_START, GET_ORDERS_SUCCESS, GET_ORDERS } from "../constants";

import mock from "../orders.json";

const mockServer =
  ({ dispatch }) =>
  (next) =>
  ({ type, ...rest }) => {
    if (type === GET_ORDERS) {
      // Эмулияция сервера
      dispatch({
        type: GET_ORDERS_START,
      });

      setTimeout(() => {
        dispatch({
          type: GET_ORDERS_SUCCESS,
          payload: mock,
        });
      }, 1500);
    } else {
      return next({ type, ...rest });
    }
  };

export default mockServer;
