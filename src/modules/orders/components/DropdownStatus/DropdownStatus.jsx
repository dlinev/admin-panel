import { Label, Column, Input, Checkbox } from "../../../../components";
import styles from "./DropdownStatus.module.css";

export const DropdownStatus = () => {
  return (
    <Column>
      <Input className={styles.dropdown} value="Любой" />

      <Column className={styles.block}>
        <Label className={styles.label} text="Новый">
          <Checkbox
            className={styles.checkbox}
            key="dp_chk_item_1"
            id="dp_chk_item_1"
          />
        </Label>

        <Label className={styles.label} text="Рассчет">
          <Checkbox
            className={styles.checkbox}
            key="dp_chk_item_2"
            id="dp_chk_item_2"
          />
        </Label>
        <Label className={styles.label} text="Подтвержден">
          <Checkbox
            className={styles.checkbox}
            key="dp_chk_item_3"
            id="dp_chk_item_3"
            // checked={true}
          />
        </Label>

        <Label className={styles.label} text="Отложен">
          <Checkbox
            className={styles.checkbox}
            key="dp_chk_item_4"
            id="dp_chk_item_4"
          />
        </Label>

        <Label className={styles.label} text="Выполнен">
          <Checkbox
            className={styles.checkbox}
            key="dp_chk_item_5"
            id="dp_chk_item_5"
          />
        </Label>

        <Label className={styles.label} text="Отменен">
          <Checkbox
            className={styles.checkbox}
            key="dp_chk_item_6"
            id="dp_chk_item_6"
          />
        </Label>
      </Column>
    </Column>
  );
};
