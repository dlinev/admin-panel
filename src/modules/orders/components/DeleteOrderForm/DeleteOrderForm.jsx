import cx from "classnames";

import { Label, Column, Radio } from "../../../../components";
import styles from "./DeleteOrderForm.module.css";

export const DeleteOrderForm = () => {
  return (
    <Column className={styles.block}>
      <Label className={styles.label} text="Новый">
        <Radio
          className={styles.checkbox}
          key="dp_chk_item_1"
          id="dp_chk_item_1"
        />
      </Label>

      <Label className={styles.label} text="Рассчет">
        <Radio
          className={styles.checkbox}
          key="dp_chk_item_2"
          id="dp_chk_item_2"
        />
      </Label>
      <Label className={styles.label} text="Подтвержден">
        <Radio
          className={styles.checkbox}
          key="dp_chk_item_3"
          id="dp_chk_item_3"
          // checked={true}
        />
      </Label>

      <Label className={styles.label} text="Отложен">
        <Radio
          className={styles.checkbox}
          key="dp_chk_item_4"
          id="dp_chk_item_4"
        />
      </Label>

      <Label className={styles.label} text="Выполнен">
        <Radio
          className={styles.checkbox}
          key="dp_chk_item_5"
          id="dp_chk_item_5"
        />
      </Label>

      <Label className={styles.label} text="Отменен">
        <Radio
          className={styles.checkbox}
          key="dp_chk_item_6"
          id="dp_chk_item_6"
        />
      </Label>
    </Column>
  );
};
