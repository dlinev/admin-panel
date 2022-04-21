import cx from "classnames";

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
      <ul className={styles.item} onClick={onEditPanel}>
        <li className={styles.row}>
          <Checkbox
            className={styles.checkbox}
            checked={selectedOrders.includes(orderId)}
            onChange={onSelect}
            onClick={(event) => event.stopPropagation()}
            value={orderId}
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
    </li>
  );
};
