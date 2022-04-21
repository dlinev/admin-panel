import {
  InputWithText,
  Label,
  Row,
  Column,
  Button,
} from "../../../../components";
import { DropdownStatus } from "../../components";

import styles from "./FilterPanel.module.css";

export const FilterPanel = ({
  filter,
  onSetFilter,
  onClearFilter,
  onCreateFilter,
}) => {
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
            onChange={onSetFilter}
            onClear={onClearFilter}
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
            onChange={onSetFilter}
            onClear={onClearFilter}
          />
        </Column>
        <Column className={styles.columnStatus}>
          <Label className={styles.label}>Статус заказа</Label>
          <DropdownStatus
            name={filter.status}
            onChange={onSetFilter}
            onClear={onClearFilter}
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
            onChange={onSetFilter}
            onClear={onClearFilter}
          />
        </Column>
        <Column className={styles.column}>
          <InputWithText
            className={styles.inputSum}
            placeholder="₽"
            text="до"
            name="sumTo"
            value={filter.sumTo}
            onChange={onSetFilter}
            onClear={onClearFilter}
          />
        </Column>
        <Column className={styles.column}>
          <Button
            className={styles.button}
            theme="flat"
            size="big"
            text="Применить"
            onClick={onCreateFilter}
          />
        </Column>
      </Row>
    </div>
  );
};
