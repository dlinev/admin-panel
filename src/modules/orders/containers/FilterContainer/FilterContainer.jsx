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
            value="20.01.2022"
          />
        </Column>
        <Column className={styles.column}>
          <InputWithText
            className={styles.inputDate}
            type="datetime"
            placeholder="dd.mm.yyyy"
            text="по"
          />
        </Column>
        <Column className={styles.columnStatus}>
          <Label className={styles.label}>Статус заказа</Label>
          <DropdownStatus />
        </Column>
        <Column className={styles.column}>
          <Label className={styles.label}>Сумма заказа</Label>
          <InputWithText
            className={styles.inputSum}
            placeholder="₽"
            text="от"
            value="5000"
          />
        </Column>
        <Column className={styles.column}>
          <InputWithText
            className={styles.inputSum}
            placeholder="₽"
            text="до"
          />
        </Column>
        <Column className={styles.column}>
          <Button
            className={styles.button}
            theme="flat"
            size="big"
            text="Применить"
          />
        </Column>
      </Row>
    </div>
  );
};