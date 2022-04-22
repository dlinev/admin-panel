import { useSelector, useDispatch } from "react-redux";
import { getOrders, getIsAllSelected } from "../../data/selectors/orders";
import { getSelectedOrders } from "../../data/selectors/getSelectedOrders";
import { getIsLoading } from "../../data/selectors/isLoading";
import {
  sortOrders,
  setSelectedOrdersAll,
  setSelectedOrdersLine,
} from "../../data/creators/orders";
import { getSortFields } from "../../data/selectors/getSortFields";

import { ListHeader, ListBody, ListFooter } from "../../components";

import styles from "./MainContainer.module.css";

export const MainContainer = () => {
  const orders = useSelector(getOrders);
  const selectedOrders = useSelector(getSelectedOrders);
  const sortFields = useSelector(getSortFields);
  const isLoading = useSelector(getIsLoading);
  const isAllSelected = useSelector(getIsAllSelected);

  const dispatch = useDispatch();

  const handleSort = ({ target: { name } }) => {
    dispatch(sortOrders(name));
  };

  const handleSelect = ({ target: { value } }) => {
    dispatch(setSelectedOrdersLine([value]));
  };

  const handleSelectAll = () => {
    dispatch(setSelectedOrdersAll(orders));
  };

  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader
          sortFields={sortFields}
          onClick={handleSort}
          onSelected={handleSelectAll}
          isAllSelected={isAllSelected}
        />
        {!isLoading && (
          <ListBody
            orders={orders}
            selectedOrders={selectedOrders}
            onSelect={handleSelect}
          />
        )}
        <ListFooter />
      </div>
    </main>
  );
};
