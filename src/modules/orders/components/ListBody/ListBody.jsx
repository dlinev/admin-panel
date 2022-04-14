import { ListItem } from "..";
import styles from "./ListBody.module.css";

export const ListBody = ({ orders, selected }) => {
  const ordersList = orders.map((order) => {
    return <ListItem {...order} key={order.orderId} selected={selected} />;
  });

  return <div className={styles._}>{ordersList}</div>;
};
