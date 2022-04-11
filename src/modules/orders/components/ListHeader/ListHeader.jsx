import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";
import { Button, Checkbox, Text, Row, Label } from "../../../../components";

import styles from "./ListHeader.module.css";

export const ListHeader = () => {
  return (
    <div className={styles._}>
      <ul className={styles.item}>
        <li className={styles.row}>
          <Checkbox />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>#</Text>
        </li>
        <li className={styles.row}>
          <Label>
            <Row className={styles.row}>
              <Text className={styles.text}>Дата</Text>
            </Row>
          </Label>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Статус</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Позиций</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Сумма</Text>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>ФИО покупателя</Text>
        </li>
      </ul>
    </div>
  );
};
