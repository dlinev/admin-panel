import { ReactComponent as FilterIcon } from "../../../../icons/filter.svg";
import { ReactComponent as RefreshIcon } from "../../../../icons/refresh.svg";
import { Searchbar, Button, Column, Row } from "../../../../components";
import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles._}>
      <div className={styles.row}>
        <Row className={styles.row}>
          <Searchbar
            className={styles.searchbar}
            placeholder="Введите номер заказа или ФИО"
          />
          <Button
            className={styles.button}
            icon={FilterIcon}
            theme="default"
            size="big"
            autoSize={true}
            text="Фильтры"
          />
          <Button
            className={styles.button}
            theme="flat"
            size="big"
            autoSize={true}
            text="Сбросить фильтры"
          />
        </Row>
        <Button
          className={styles.button}
          icon={RefreshIcon}
          theme="flat"
          size="big"
          autoSize={true}
          text="Загрузка"
        />
      </div>
    </div>
  );
};
