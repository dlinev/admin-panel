import { ReactComponent as XMediumIcon } from "../../../../icons/x-medium.svg";
import { Button, Text, Row } from "../../../../components";

import styles from "./EditPanel.module.css";

export const EditPanel = ({ onClose }) => {
  return (
    <Row className={styles._}>
      <Text className={styles.header} component="h2">
        Редактирование заказа
      </Text>
      <Button
        className={styles.button}
        theme="default"
        size="big"
        icon={XMediumIcon}
        onClick={onClose}
      />
    </Row>
  );
};
