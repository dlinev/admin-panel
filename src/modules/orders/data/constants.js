/*icon*/
import { ReactComponent as AbortIcon } from "../../../icons/abort.svg";
import { ReactComponent as DotIcon } from "../../../icons/dot.svg";
import { ReactComponent as CheckmarkIcon } from "../../../icons/checkmark.svg";

/*const */
export const SEARCH_ORDERS = "SEARCH_ORDERS";
export const CLEAR_SEARCH_ORDERS_LINE = "CLEAR_SEARCH_ORDERS_LINE";
export const SET_SEARCH_ORDERS_LINE = "SET_SEARCH_ORDERS_LINE";
export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDERS_START = "GET_ORDERS_START";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAIL = "GET_ORDERS_FAIL";
export const GET_SELECT_ORDERS = "GET_SELECT_ORDERS";
export const SET_SELECTED_ORDERS_LINE = "SET_SELECTED_ORDERS_LINE";

/* keyDown */
export const ENTER_CODE = 13;

/* data */
export const STATUS = [
  {
    id: "NEW",
    text: "Новый",
    icon: <DotIcon />,
    style_icon: "status_new",
  },
  {
    id: "CALC",
    text: "Рассчет",
    icon: <DotIcon />,
    style_icon: "status_calc",
  },
  {
    id: "APROVE",
    text: "Подтвержден",
    icon: <DotIcon />,
    style_icon: "status_aprove",
  },
  {
    id: "HOLD",
    text: "Отложен",
    icon: <DotIcon />,
    style_icon: "status_hold",
  },
  {
    id: "DONE",
    text: "Выполнен",
    icon: <CheckmarkIcon />,
    style_icon: "status_done",
    style_text: "status_done",
  },
  {
    id: "ABORT",
    text: "Отменен",
    icon: <AbortIcon />,
    style_icon: "status_abort",
    style_text: "status_abort",
  },
];
