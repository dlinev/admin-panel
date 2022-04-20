import {
  ORDER_ID,
  ORDER_DATE,
  ORDER_STATUS,
  ORDER_SUM,
  ORDER_COUNT,
  ORDER_CLIENT,
} from "../../data/constants";

import { Checkbox, Text } from "../../../../components";

import styles from "./ListHeader.module.css";

export const ListHeader = ({ onClick, onSelected, isAllSelected }) => {
  return (
    <div className={styles._}>
      <ul className={styles.item}>
        <li className={styles.row}>
          <Checkbox onChange={onSelected} checked={isAllSelected} />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>#</Text>
          <input
            className={styles.button}
            value={ORDER_ID}
            type="button"
            onClick={onClick}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Дата</Text>
          <input
            className={styles.button}
            value={ORDER_DATE}
            type="button"
            onClick={onClick}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Статус</Text>
          <input
            className={styles.button}
            value={ORDER_STATUS}
            type="button"
            onClick={onClick}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Позиций</Text>
          <input
            className={styles.button}
            value={ORDER_COUNT}
            type="button"
            onClick={onClick}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>Сумма</Text>
          <input
            className={styles.button}
            value={ORDER_SUM}
            type="button"
            onClick={onClick}
          />
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>ФИО покупателя</Text>
          <input
            className={styles.button}
            value={ORDER_CLIENT}
            type="button"
            onClick={onClick}
          />
        </li>
      </ul>
    </div>
  );
};
