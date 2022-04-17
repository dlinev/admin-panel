import { useSelector } from "react-redux";
import { getIsLoading } from "../../data/selectors/isLoading";

import { ReactComponent as EditIcon } from "../../../../icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../../icons/bin.svg";

import { Text, Button, Row, Paginator } from "../../../../components";

import styles from "./ListFooter.module.css";
import {
  getCountOrders,
  getCountSelectedOrders,
  hasSelectedOrders,
} from "../../data/selectors/orders";

export const ListFooter = () => {
  const isLoading = useSelector(getIsLoading);
  const countSelected = useSelector(getCountSelectedOrders);
  const hasSelected = useSelector(hasSelectedOrders);

  const lastPage = Math.ceil(useSelector(getCountOrders) / 3);

  return (
    <div className={styles._}>
      <Row className={styles.row}>
        <Text className={styles.text}>Выбрано записей: {countSelected}</Text>
        {hasSelected && (
          <Button
            className={styles.button}
            icon={EditIcon}
            theme="default"
            size="small"
            autoSize={true}
            text="Изменить статус"
          />
        )}
        {hasSelected && (
          <Button
            className={styles.button}
            icon={DeleteIcon}
            theme="error"
            size="small"
            autoSize={true}
            text="Удалить"
          />
        )}
      </Row>
      {!isLoading && lastPage > 1 && (
        <Row className={styles.row}>
          <Paginator
            className={styles.paginator}
            currentPage={1}
            lastPage={lastPage}
          />
          <Button
            className={styles.button_page}
            theme="flat"
            size="small"
            text="#"
          />
        </Row>
      )}
    </div>
  );
};
