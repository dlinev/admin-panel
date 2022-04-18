import { ListItem } from "..";
import styles from "./ListBody.module.css";

export const ListBody = ({ orders, selectedOrders, onSelected }) => {
  console.log(selectedOrders);
  const ordersList = orders.map((order) => {
    return (
      <ListItem
        {...order}
        key={order.orderId}
        selectedOrders={selectedOrders}
        onSelected={onSelected}
      />
    );
  });

  return <div className={styles._}>{ordersList}</div>;
};
