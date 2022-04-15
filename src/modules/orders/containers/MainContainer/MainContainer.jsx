import { useSelector, useDispatch } from "react-redux";
import { getFilteredOrders } from "../../data/selectors/orders";
import { getSelectedOrders } from "../../data/selectors/getSelectedOrders";
import { getIsLoading } from "../../data/selectors/isLoading";

import { ListHeader, ListBody, ListFooter, EditPanel } from "../../components";
import styles from "./MainContainer.module.css";

export const MainContainer = () => {
  const orders = useSelector(getFilteredOrders);
  const selectedOrders = useSelector(getSelectedOrders);
  const isLoading = useSelector(getIsLoading);

  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader />
        {!isLoading && <ListBody orders={orders} selected={selectedOrders} />}
        <ListFooter />
        <EditPanel />
      </div>
    </main>
  );
};
