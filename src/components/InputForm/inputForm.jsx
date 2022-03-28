import { InputWithLabel } from "../components";

import styles from "./InputForm.module.css";

export const InputForm = () => {
  return (
    <div className={styles.frame}>
      <InputWithLabel
        label="Дата и время заказа"
        placeholder="Введите"
        theme="default"
      />

      <InputWithLabel
        value="06.12.2021"
        label="Дата и время заказа"
        placeholder="Введите"
        theme="error"
      />
      <InputWithLabel
        value="06.12.2021"
        label="Дата и время заказа"
        placeholder="Введите"
        theme="disabled"
      />
    </div>
  );
};
