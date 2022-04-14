import { useSelector } from "react-redux";
import { getFilteredOrders } from "../../data/selectors/orders";
import { getIsLoading } from "../../data/selectors/isLoading";

import { ListHeader, ListBody, ListFooter, EditPanel } from "../../components";
import styles from "./MainContainer.module.css";

export const MainContainer = () => {
  const orders = useSelector(getFilteredOrders);
  const isLoading = useSelector(getIsLoading);

  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader />
        {!isLoading && <ListBody orders={orders} />}
        <ListFooter />
        <EditPanel />
      </div>
    </main>
  );
};
