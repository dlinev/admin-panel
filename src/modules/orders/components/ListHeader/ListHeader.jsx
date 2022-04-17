import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";

import { Checkbox, Text, Button } from "../../../../components";

import styles from "./ListHeader.module.css";

export const ListHeader = ({ onClick }) => {
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
          <Text className={styles.text}>Дата</Text>
          <Button
            className={styles.button}
            theme="default"
            size="small"
            icon={VArrowIcon}
            onClick={onClick}
          />
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
