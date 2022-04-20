import { ListItem } from "..";
import styles from "./ListBody.module.css";

export const ListBody = ({ orders, selectedOrders, onSelect, onEditPanel }) => {
  const ordersList = orders.map((order) => {
    return (
      <ListItem
        {...order}
        key={order.orderId}
        selectedOrders={selectedOrders}
        onSelect={onSelect}
        onEditPanel={onEditPanel}
      />
    );
  });

  return <div className={styles._}>{ordersList}</div>;
};
