import { InputWithLabel } from "../../../components";

import styles from "./InputForm.module.css";

export const InputForm = () => {
  return (
    <div className={styles.frame}>
      <InputWithLabel placeholder="Введите" label="Дата и время заказа" />
      <InputWithLabel
        value="06.12.2021"
        placeholder="Введите"
        invalid={true}
        label="Дата и время заказа"
      />
      <InputWithLabel
        value="06.12.2021"
        placeholder="Введите"
        disabled={true}
        label="Дата и время заказа"
      />
    </div>
  );
};
