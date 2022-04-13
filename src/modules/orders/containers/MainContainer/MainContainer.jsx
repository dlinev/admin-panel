import { useSelector } from "react-redux";
import { getFilteredOrders } from "../../data/selectors/orders";

import { ListHeader, ListBody, ListFooter, EditPanel } from "../../components";
import styles from "./MainContainer.module.css";

export const MainContainer = () => {
  const orders = useSelector(getFilteredOrders);

  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader />
        <ListBody orders={orders} />
        <ListFooter />
        <EditPanel />
      </div>
    </main>
  );
};
