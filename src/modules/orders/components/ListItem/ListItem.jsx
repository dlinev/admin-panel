import cx from "classnames";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  setSelectedOrdersLine,
  clearSelectedOrdersLine,
} from "../../data/creators/orders";

import { Checkbox, Text, Row, Button } from "../../../../components";
import styles from "./ListItem.module.css";

import { STATUS } from "../../data/constants";

export const ListItem = ({
  orderId,
  orderDate,
  orderStatus,
  orderCount,
  orderSum,
  orderClient,
  selectedOrders,
  onSelect,
  onEditPanel,
}) => {
  const status = STATUS.find(({ text }) => text === orderStatus);
  const iconClass = cx(styles.icon, {
    [styles[status.style_icon]]: true,
  });

  return (
    <li className={styles._}>
      {/* <Label className={cx(styles.label)}> */}
      <ul className={styles.item}>
        <li className={styles.row}>
          <Checkbox
            className={styles.checkbox}
            checked={selectedOrders.includes(orderId)}
            onChange={onSelect}
            value={orderId}
          />
        </li>
        <li className={styles.row} onClick={onEditPanel}>
          <Text className={styles.text}>{orderId}</Text>
        </li>
        <li className={styles.row} onClick={onEditPanel}>
          <Text className={styles.text} type="datetime">
            {orderDate}
          </Text>
        </li>
        <li className={styles.row} onClick={onEditPanel}>
          <Row>
            <div className={iconClass}>{status.icon}</div>
            <Text className={styles[status.style_text]}>{orderStatus}</Text>
          </Row>
        </li>
        <li className={styles.row} onClick={onEditPanel}>
          <Text className={styles.text}>{orderCount}</Text>
        </li>
        <li className={styles.row} onClick={onEditPanel}>
          <Text className={styles.text}>
            {orderSum}
            {orderSum === "-" || orderSum === null ? "" : " ₽"}
          </Text>
        </li>
        <li className={styles.row} onClick={onEditPanel}>
          <Text className={styles.text}>{orderClient}</Text>
        </li>
      </ul>
      {/* </Label> */}
    </li>
  );
};
