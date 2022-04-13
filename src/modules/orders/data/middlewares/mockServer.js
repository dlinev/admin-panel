import { GET_ORDERS_START, GET_ORDERS_SUCCESS, GET_ORDERS } from "../constants";

const mock = [
  {
    orderId: "1270989",
    orderDate: "15.02.2021, 18:00",
    orderStatus: "Новый",
    orderCount: "6",
    orderSum: "1010907",
    orderClient: "Чернышев Филипп Семёнович",
  },
];

const logger =
  ({ dispatch }) =>
  (next) =>
  ({ action, ...rest }) => {
    if (action === GET_ORDERS) {
      // Эмулияция сервера
      dispatch({
        action: GET_ORDERS_START,
      });

      setTimeout(() => {
        dispatch({
          action: GET_ORDERS_SUCCESS,
          payload: mock,
        });
      }, 2000);
    } else {
      return next({ action, ...rest });
    }
  };

export default logger;
