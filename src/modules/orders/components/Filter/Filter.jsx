import { ReactComponent as FilterIcon } from "../../../../icons/filter.svg";
import { ReactComponent as RefreshIcon } from "../../../../icons/refresh.svg";
import { Searchbar, Button, Column, Row } from "../../../../components";
import styles from "./Filter.module.css";

export const Filter = () => {
  return (
    <div className={styles._}>
      <Column>
        <div className={styles.row}>
          <Row className={styles.row}>
            <Searchbar
              className={styles.searchbar}
              placeholder="Введите имя заказа или ФИО"
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
        <Row className={styles.panel}>панель фильтра</Row>
      </Column>
    </div>
  );
};
