import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";
import { useState, useRef } from "react";
import cx from "classnames";

import { useOuterClick } from "../../utils";

import { Label, Column, Row, Checkbox } from "../../../../components";
import styles from "./DropdownStatus.module.css";

export const DropdownStatus = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  const thisRef = useOuterClick(() => {
    setOpen(!isOpen);
  });

  return (
    <Column>
      <Row className={styles.row}>
        <input
          className={styles.dropdown}
          type="text"
          placeholder="Выберете статус"
          value="Любой"
          disabled={true}
        />
        <input className={styles.button} type="button" onClick={handleOpen} />
        <VArrowIcon
          className={cx(styles.icon, { [styles.icon_reverse]: isOpen })}
        />
      </Row>

      {isOpen && (
        <div ref={thisRef} className={styles.block}>
          <Column>
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
        </div>
      )}
    </Column>
  );
};
