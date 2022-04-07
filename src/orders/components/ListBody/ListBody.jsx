import { ListItem } from "../";
import styles from "./ListBody.module.css";

export const ListBody = ({ orders }) => {
  const ordersList = orders.map((order) => {
    return <ListItem {...order} key={order.id} />;
  });

  return (
    <div className={styles._}>
      <ul className={styles.item}>{ordersList}</ul>
    </div>
  );
};
