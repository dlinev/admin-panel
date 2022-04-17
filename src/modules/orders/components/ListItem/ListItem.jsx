import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { GET_SELECT_ORDERS } from "../../data/constants";

import { getSelectedOrders } from "../../data/selectors/getSelectedOrders";
import {
  setSelectedOrdersLine,
  clearSelectedOrdersLine,
} from "../../data/creators/orders";

import { Checkbox, Text, Row } from "../../../../components";
import styles from "./ListItem.module.css";

import { STATUS } from "../../data/constants";

export const ListItem = ({
  orderId,
  orderDate,
  orderStatus,
  orderCount,
  orderSum,
  orderClient,
  selected,
  onSelected,
}) => {
  const status = STATUS.find(({ text }) => text === orderStatus);
  const iconClass = cx(styles.icon, {
    [styles[status.style_icon]]: true,
  });

  const selectedOrders = useSelector(getSelectedOrders);

  const dispatch = useDispatch();

  const handleSelected = ({ target: { checked } }) => {
    if (checked) {
      dispatch(setSelectedOrdersLine(orderId));
    } else {
      dispatch(clearSelectedOrdersLine(orderId));
    }
    // dispatch({
    //   type: GET_SELECT_ORDERS,
    // });
  };

  return (
    <li className={styles._}>
      {/* <Label className={cx(styles.label)}> */}
      <ul className={styles.item}>
        <li className={styles.row}>
          <Checkbox
            className={styles.checkbox}
            checked={selectedOrders.includes({ orderId })}
            onChange={handleSelected}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>{orderId}</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text} type="datetime">
            {orderDate}
          </Text>
        </li>
        <li className={styles.row}>
          <Row>
            <div className={iconClass}>{status.icon}</div>
            <Text className={styles[status.style_text]}>{orderStatus}</Text>
          </Row>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>{orderCount}</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>
            {orderSum}
            {orderSum === "-" || orderSum === null ? "" : " ₽"}
          </Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>{orderClient}</Text>
        </li>
      </ul>
      {/* </Label> */}
    </li>
  );
};
