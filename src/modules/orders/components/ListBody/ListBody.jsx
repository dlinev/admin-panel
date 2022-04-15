import { ListItem } from "..";
import styles from "./ListBody.module.css";

export const ListBody = ({ orders, selected, onSelected }) => {
  const ordersList = orders.map((order) => {
    return (
      <ListItem
        {...order}
        key={order.orderId}
        selected={selected}
        onSelected={onSelected}
      />
    );
  });

  return <div className={styles._}>{ordersList}</div>;
};
