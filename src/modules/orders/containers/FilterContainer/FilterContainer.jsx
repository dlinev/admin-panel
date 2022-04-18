import { useState } from "react";
import { useDispatch } from "react-redux";

import { setFiltredOrders } from "../../data/creators/orders";

import {
  InputWithText,
  Label,
  Row,
  Column,
  Button,
} from "../../../../components";
import { DropdownStatus } from "../../components";

import styles from "./FilterContainer.module.css";

export const FilterContainer = () => {
  const [filter, setFilter] = useState({
    name: "",
    value: "",
    dateFrom: "20.01.2022",
    dateTo: "",
    sumFrom: "5000",
    sumTo: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClear = () => {
    // setFilter({
    //   ...filter,
    //   [name]: '',
    // });
  };
  const dispatch = useDispatch();

  const handleSetFilter = () => {
    dispatch(setFiltredOrders(filter));
  };

  return (
    <div className={styles._}>
      <Row className={styles.panel}>
        <Column className={styles.column}>
          <Label className={styles.label}>Дата оформления</Label>
          <InputWithText
            className={styles.inputDate}
            type="datetime"
            placeholder="dd.mm.yyyy"
            text="с"
            name="dateFrom"
            value={filter.dateFrom}
            onChange={handleChange}
            onClear={handleClear}
          />
        </Column>
        <Column className={styles.column}>
          <InputWithText
            className={styles.inputDate}
            type="datetime"
            placeholder="dd.mm.yyyy"
            text="по"
            name="dateTo"
            value={filter.dateTo}
            onChange={handleChange}
            onClear={handleClear}
          />
        </Column>
        <Column className={styles.columnStatus}>
          <Label className={styles.label}>Статус заказа</Label>
          <DropdownStatus
            name={filter.status}
            onChange={handleChange}
            onClear={handleClear}
          />
        </Column>
        <Column className={styles.column}>
          <Label className={styles.label}>Сумма заказа</Label>
          <InputWithText
            className={styles.inputSum}
            placeholder="₽"
            text="от"
            name="sumFrom"
            value={filter.sumFrom}
            onChange={handleChange}
            onClear={handleClear}
          />
        </Column>
        <Column className={styles.column}>
          <InputWithText
            className={styles.inputSum}
            placeholder="₽"
            text="до"
            name="sumTo"
            value={filter.sumTo}
            onChange={handleChange}
            onClear={handleClear}
          />
        </Column>
        <Column className={styles.column}>
          <Button
            className={styles.button}
            theme="flat"
            size="big"
            text="Применить"
            onClick={handleSetFilter}
          />
        </Column>
      </Row>
    </div>
  );
};
