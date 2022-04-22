import cx from "classnames";

import { Checkbox, Text, Row } from "../../../../components";
import styles from "./ListItem.module.css";

import { STATUS } from "../../data/constants";

export const ListItem = ({
  selectedOrders,
  onSelect,
  onEditPanel,
  ...order
}) => {
  const status = STATUS.find(({ text }) => text === order.orderStatus);
  const iconClass = cx(styles.icon, {
    [styles[status.style_icon]]: true,
  });

  return (
    <li className={styles._}>
      <ul className={styles.item} onClick={onEditPanel}>
        <li className={styles.row}>
          <Checkbox
            className={styles.checkbox}
            checked={selectedOrders.includes(order.orderId)}
            onChange={onSelect}
            onClick={(event) => event.stopPropagation()}
            value={order.orderId}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>{order.orderId}</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text} type="datetime">
            {order.orderDate}
          </Text>
        </li>
        <li className={styles.row}>
          <Row>
            <div className={iconClass}>{status.icon}</div>
            <Text className={styles[status.style_text]}>
              {order.orderStatus}
            </Text>
          </Row>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>{order.orderCount}</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>
            {order.orderSum}
            {order.orderSum === "-" || order.orderSum === null ? "" : " ₽"}
          </Text>
        </li>
        <li className={styles.row} value={order}>
          <Text className={styles.text}>{order.orderClient}</Text>
        </li>
      </ul>
    </li>
  );
};
