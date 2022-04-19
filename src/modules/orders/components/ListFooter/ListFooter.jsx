import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { getIsLoading } from "../../data/selectors/isLoading";
import { getCurrentPage } from "../../data/selectors/getCurrentPage";

import {
  getCountOrders,
  getCountSelectedOrders,
  hasSelectedOrders,
} from "../../data/selectors/orders";

import { setCurrentPage } from "../../data/creators/orders";

import { ReactComponent as EditIcon } from "../../../../icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../../icons/bin.svg";

import { Text, Button, Row, Paginator } from "../../../../components";
import { ChangeStatusForm, DeleteOrderForm, ChoicePageForm } from "../";

import { COUNT_LINES_ON_PAGE } from "../../data/constants";

import styles from "./ListFooter.module.css";

export const ListFooter = () => {
  const isLoading = useSelector(getIsLoading);
  const countSelected = useSelector(getCountSelectedOrders);
  const countOrders = useSelector(getCountOrders);
  const hasSelected = useSelector(hasSelectedOrders);
  const currentPage = useSelector(getCurrentPage);

  const lastPage = Math.ceil(countOrders / COUNT_LINES_ON_PAGE);

  const dispatch = useDispatch();
  const handleClick = ({ target: { value } }) => {
    dispatch(setCurrentPage(parseInt(value)));
  };

  const [isChangeStatusFormOpen, setChangeStatusFormOpen] = useState(false);
  const handleChangeStatusForm = () =>
    setChangeStatusFormOpen(!isChangeStatusFormOpen);

  const [isDeleteFormOpen, setDeleteFormOpen] = useState(false);
  const handleDeleteOrderForm = () => setDeleteFormOpen(!isDeleteFormOpen);

  const [isChoicePageFormOpen, setChoicePageFormOpen] = useState(false);
  const handleChoicePageForm = () =>
    setChoicePageFormOpen(!isChoicePageFormOpen);

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
            onClick={handleChangeStatusForm}
          />
        )}

        {isChangeStatusFormOpen && hasSelected && <ChangeStatusForm />}

        {hasSelected && (
          <Button
            className={styles.button}
            icon={DeleteIcon}
            theme="error"
            size="small"
            autoSize={true}
            text="Удалить"
            onClick={handleDeleteOrderForm}
          />
        )}

        {isDeleteFormOpen && hasSelected && <DeleteOrderForm />}
      </Row>
      {!isLoading && lastPage > 1 && (
        <Row className={styles.row}>
          <Paginator
            className={styles.paginator}
            currentPage={currentPage}
            lastPage={lastPage}
            onClick={handleClick}
          />
          <Button
            className={styles.button_page}
            theme="flat"
            size="small"
            text="#"
            onClick={handleChoicePageForm}
          />

          {isChoicePageFormOpen && hasSelected && <ChoicePageForm />}
        </Row>
      )}
    </div>
  );
};
