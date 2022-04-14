import { ReactComponent as FilterIcon } from "../../../../icons/filter.svg";
import { ReactComponent as RefreshIcon } from "../../../../icons/refresh.svg";

import { useState } from "react";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../data/selectors/isLoading";

import { FilterContainer } from "../../containers";
import { Searchbar, Button, Row, Text } from "../../../../components";

import styles from "./SearchPanel.module.css";

export const SearchPanel = ({
  value,
  className,
  onChange,
  onClear,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  const isLoading = useSelector(getIsLoading);

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
            theme={isOpen ? "default" : "flat"}
            size="big"
            autoSize={true}
            text="Фильтры"
            onClick={handleOpen}
          />
          {isOpen && (
            <Button
              className={styles.button}
              theme="flat"
              size="big"
              autoSize={true}
              text="Сбросить фильтры"
              onClick={onClear}
            />
          )}
        </Row>
        {isLoading && (
          <Row className={styles.row}>
            <RefreshIcon className={styles.icon} />
            <Text className={styles.text}>Загрузка</Text>
          </Row>
        )}
      </div>

      {isOpen && <FilterContainer />}
    </div>
  );
};
