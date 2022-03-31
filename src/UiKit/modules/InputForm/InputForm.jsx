import { InputWithLabel } from "../../../components";

import styles from "./InputForm.module.css";

export const InputForm = () => {
  return (
    <div className={styles.frame}>
      <InputWithLabel placeholder="Введите">Дата и время заказа</InputWithLabel>

      <InputWithLabel value="06.12.2021" placeholder="Введите" invalid={true}>
        Дата и время заказа
      </InputWithLabel>
      <InputWithLabel value="06.12.2021" placeholder="Введите" disabled={true}>
        Дата и время заказа
      </InputWithLabel>
    </div>
  );
};
