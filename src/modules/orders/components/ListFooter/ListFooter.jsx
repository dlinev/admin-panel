import { useSelector } from "react-redux";
import { getIsLoading } from "../../data/selectors/isLoading";

import { ReactComponent as EditIcon } from "../../../../icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../../icons/bin.svg";

import { Text, Button, Row } from "../../../../components";
import { Paginator } from "../";

import styles from "./ListFooter.module.css";

export const ListFooter = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <div className={styles._}>
      <Row className={styles.row}>
        <Text className={styles.text}>Выбрано записей: 0</Text>
        <Button
          className={styles.button}
          icon={EditIcon}
          theme="default"
          size="small"
          autoSize={true}
          text="Изменить статус"
        />
        <Button
          className={styles.button}
          icon={DeleteIcon}
          theme="error"
          size="small"
          autoSize={true}
          text="Удалить"
        />
      </Row>
      <Row className={styles.row}>
        {!isLoading && (
          <Paginator
            className={styles.paginator}
            currentPage={1}
            lastPage={18}
          />
        )}
      </Row>
    </div>
  );
};
