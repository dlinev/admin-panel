import { ReactComponent as FilterIcon } from "../../../../icons/filter.svg";
import { ReactComponent as RefreshIcon } from "../../../../icons/refresh.svg";
import { Searchbar, Button, Row } from "../../../../components";
import styles from "./SearchPanel.module.css";

export const SearchPanel = ({
  value,
  className,
  onChange,
  onClear,
  ...props
}) => {
  return (
    <div className={styles._}>
      <div className={styles.row}>
        <Row className={styles.row}>
          <Searchbar
            className={styles.searchbar}
            placeholder="Введите номер заказа или ФИО"
            value={value}
            onChange={onChange}
            onClear={onClear}
            {...props}
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
            onClick={onClear}
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
