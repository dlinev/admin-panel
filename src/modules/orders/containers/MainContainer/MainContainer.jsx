import { useSelector, useDispatch } from "react-redux";
import { getSortedOrders } from "../../data/selectors/orders";

import { getSelectedOrders } from "../../data/selectors/getSelectedOrders";
import { getIsLoading } from "../../data/selectors/isLoading";
import {
  sortOrders,
  setSelectedOrdersAll,
  clearSelectedOrdersAll,
} from "../../data/creators/orders";

import { ListHeader, ListBody, ListFooter, EditPanel } from "../../components";
import styles from "./MainContainer.module.css";
import { getSortFields } from "../../data/selectors/getSortFields";

export const MainContainer = () => {
  const orders = useSelector(getSortedOrders);
  const selectedOrders = useSelector(getSelectedOrders);
  const sortFields = useSelector(getSortFields);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const handleClick = ({ target: { name } }) => {
    dispatch(sortOrders(name));
  };

  const handleChange = ({ target: { checked } }) => {
    if (checked) {
      dispatch(setSelectedOrdersAll());
    } else {
      dispatch(clearSelectedOrdersAll());
    }
  };

  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader
          sortFields={sortFields}
          onClick={handleClick}
          onChange={handleChange}
        />
        {!isLoading && (
          <ListBody orders={orders} selectedOrders={selectedOrders} />
        )}
        <ListFooter />
        <EditPanel />
      </div>
    </main>
  );
};
