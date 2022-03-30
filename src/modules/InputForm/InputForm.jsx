import { InputWithLabel } from "../../components/components";

import styles from "./InputForm.module.css";

export const InputForm = () => {
  return (
    <div className={styles.frame}>
      <InputWithLabel placeholder="Введите" theme="default">
        Дата и время заказа
      </InputWithLabel>

      <InputWithLabel value="06.12.2021" placeholder="Введите" theme="error">
        Дата и время заказа
      </InputWithLabel>
      <InputWithLabel value="06.12.2021" placeholder="Введите" theme="disabled">
        Дата и время заказа
      </InputWithLabel>
    </div>
  );
};
