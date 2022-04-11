import { ReactComponent as EditIcon } from "../../../../icons/pencil.svg";
import { ReactComponent as DeleteIcon } from "../../../../icons/bin.svg";
import { Text, Button, Row } from "../../../../components";
import styles from "./ListFooter.module.css";

export const ListFooter = () => {
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
        <Text className={styles.text}>1 2 3 ... 10 #</Text>
      </Row>
    </div>
  );
};