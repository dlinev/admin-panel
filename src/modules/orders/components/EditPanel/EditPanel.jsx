import { ReactComponent as XMediumIcon } from "../../../../icons/x-medium.svg";
import { Button, Text, Row } from "../../../../components";

import styles from "./EditPanel.module.css";

export const EditPanel = () => {
  return (
    <form className={styles._}>
      <Row className={styles.row}>
        <Text className={styles.header} component="h2">
          Редактирование заказа
        </Text>
        <Button
          className={styles.button}
          theme="default"
          size="big"
          icon={XMediumIcon}
        />
      </Row>
    </form>
  );
};
