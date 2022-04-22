import cx from "classnames";

import { Input, Text, Column } from "../../../../components";
import styles from "./ChoicePageForm.module.css";

export const ChoicePageForm = () => {
  return (
    <Column className={styles.block}>
      <Text className={styles.text}>Номер страницы</Text>
      <Input placeholder="Введите номер" theme="default" />
    </Column>
  );
};
