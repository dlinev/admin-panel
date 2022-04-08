import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";
import { Checkbox, Text } from "../../../../components";

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
          <div className="table__header-group">
            <Text className={styles.text}>Дата</Text>
          </div>
        </li>
        <li className={styles.row}>
          <div className="table__header-group">
            <Text className={styles.text}>Статус</Text>
          </div>
        </li>
        <li className={styles.row}>
          <div className="table__header-group">
            <Text className={styles.text}>Позиций</Text>
          </div>
        </li>
        <li className={styles.row}>
          <div className="table__header-group">
            <Text className={styles.text}>Сумма</Text>
          </div>
        </li>
        <li className={styles.row}>
          <Text className={styles.text}>ФИО покупателя</Text>
        </li>
      </ul>
    </div>
  );
};
