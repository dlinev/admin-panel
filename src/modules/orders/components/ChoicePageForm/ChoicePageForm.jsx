import cx from "classnames";

import { InputWithLabel, Column } from "../../../../components";
import styles from "./ChoicePageForm.module.css";

export const ChoicePageForm = () => {
  return (
    <Column className={styles.block}>
      <InputWithLabel
        placeholder="Введите номер"
        theme="default"
        label="Номер страницы"
      />
    </Column>
  );
};
