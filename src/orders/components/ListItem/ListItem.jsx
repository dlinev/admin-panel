import { Label, Checkbox, Text } from "../../../components";
import styles from "./ListItem.module.css";

export const ListItem = ({
  orderId,
  orderDate,
  orderStatus,
  orderCount,
  orderSum,
  orderClient,
}) => {
  return (
    <li className={styles._}>
      <Label className={styles.label}>
        <ul className={styles.item}>
          <li className={styles.row}>
            <Checkbox />
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
            {/* <div className={styles.icon}>{orderStatus}</div> */}
            <Text className={styles.status}>{orderStatus}</Text>
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
      </Label>
    </li>
  );
};
