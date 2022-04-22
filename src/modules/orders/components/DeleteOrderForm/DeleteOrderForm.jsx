import cx from "classnames";

import { Column, Text, Button } from "../../../../components";
import styles from "./DeleteOrderForm.module.css";

export const DeleteOrderForm = () => {
  return (
    <Column className={styles.block}>
      <Text className={styles.text}>Удалить n-записей</Text>
      <Button
        className={styles.button}
        theme="flat"
        size="small"
        text="Удалить"
      />
      <Button
        className={styles.button}
        theme="default"
        size="small"
        text="Отменить"
      />
    </Column>
  );
};
