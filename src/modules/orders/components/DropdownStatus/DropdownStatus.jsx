import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";
import { useState, useRef } from "react";
import cx from "classnames";

import { useOuterClick } from "../../utils";

import { Label, Column, Row, Checkbox } from "../../../../components";
import styles from "./DropdownStatus.module.css";

export const DropdownStatus = ({ value, onChange, status }) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  const thisRef = useOuterClick(() => {
    handleOpen();
  });

  return (
    <Column>
      <Row className={styles.row}>
        <input
          className={styles.dropdown}
          type="text"
          placeholder="Выберете статус"
          value={value}
          disabled={true}
          onChange={() => {}}
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
                name="Новый"
                checked={status.includes("Новый")}
                onChange={onChange}
              />
            </Label>

            <Label className={styles.label} text="Расчет">
              <Checkbox
                className={styles.checkbox}
                key="dp_chk_item_2"
                id="dp_chk_item_2"
                name="Расчет"
                checked={status.includes("Расчет")}
                onChange={onChange}
              />
            </Label>
            <Label className={styles.label} text="Подтвержден">
              <Checkbox
                className={styles.checkbox}
                key="dp_chk_item_3"
                id="dp_chk_item_3"
                name="Подтвержден"
                checked={status.includes("Подтвержден")}
                onChange={onChange}
              />
            </Label>

            <Label className={styles.label} text="Отложен">
              <Checkbox
                className={styles.checkbox}
                key="dp_chk_item_4"
                id="dp_chk_item_4"
                name="Отложен"
                checked={status.includes("Отложен")}
                onChange={onChange}
              />
            </Label>

            <Label className={styles.label} text="Выполнен">
              <Checkbox
                className={styles.checkbox}
                key="dp_chk_item_5"
                id="dp_chk_item_5"
                name="Выполнен"
                checked={status.includes("Выполнен")}
                onChange={onChange}
              />
            </Label>

            <Label className={styles.label} text="Отменен">
              <Checkbox
                className={styles.checkbox}
                key="dp_chk_item_6"
                id="dp_chk_item_6"
                name="Отменен"
                checked={status.includes("Отменен")}
                onChange={onChange}
              />
            </Label>
          </Column>
        </div>
      )}
    </Column>
  );
};
