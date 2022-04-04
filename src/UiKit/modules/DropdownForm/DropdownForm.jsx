import {
  Checkbox,
  Radio,
  InputWithLabel,
  Button,
  Text,
  Column,
  Label,
} from "../../../components";

import { ReactComponent as MoonIcon } from "../../../icons/moon.svg";
import { ReactComponent as SunIcon } from "../../../icons/sun.svg";

import styles from "./DropdownForm.module.css";

export const DropdownForm = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.blocks}>
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
              checked={true}
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

        <Column className={styles.block}>
          <Label className={styles.label} text="Новый">
            <Radio
              name="radioGroup2"
              className={styles.radio}
              showSelector={false}
              key="dp_rad_item_1"
              id="dp_rad_item_1"
              value="dp_radio_group"
            />
          </Label>

          <Label className={styles.label} text="Рассчет">
            <Radio
              name="radioGroup2"
              className={styles.radio}
              showSelector={false}
              key="dp_rad_item_2"
              id="dp_rad_item_2"
              value="dp_radio_group"
            />
          </Label>

          <Label className={styles.label} text="Подтвержден">
            <Radio
              name="radioGroup2"
              className={styles.radio}
              showSelector={false}
              key="dp_rad_item_3"
              id="dp_rad_item_3"
              value="dp_radio_group"
              checked={true}
            />
          </Label>
          <Label className={styles.label} text="Отложен">
            <Radio
              name="radioGroup2"
              className={styles.radio}
              showSelector={false}
              key="dp_rad_item_4"
              id="dp_rad_item_4"
              value="dp_radio_group"
            />
          </Label>
          <Label className={styles.label} text="Выполнен">
            <Radio
              name="radioGroup2"
              className={styles.radio}
              showSelector={false}
              key="dp_rad_item_5"
              id="dp_rad_item_5"
              value="dp_radio_group"
            />
          </Label>
          <Label className={styles.label} text="Отменен">
            <Radio
              name="radioGroup2"
              className={styles.radio}
              showSelector={false}
              key="dp_rad_item_6"
              id="dp_rad_item_6"
              value="dp_radio_group"
            />
          </Label>
        </Column>
      </div>

      <div className={styles.blocks}>
        <Column className={styles.block}>
          <InputWithLabel
            placeholder="Введите номер"
            theme="default"
            label="Номер страницы"
          />
        </Column>

        <Column className={styles.block}>
          <Text className={styles.text}>Удалить n-записей</Text>
          <Button
            className={styles.button}
            theme="flat"
            size="small"
            text="Удалить"
          />
          <Button
            className={styles.button}
            theme="default"
            size="small"
            text="Отменить"
          />
        </Column>

        <Column className={styles.block}>
          <Text className={styles.text}>Выберете тему</Text>
          <Button
            className={styles.button}
            theme="flat"
            size="small"
            icon={SunIcon}
            text="Светлая"
          />
          <Button
            className={styles.button}
            theme="default"
            size="small"
            icon={MoonIcon}
            text="Темная"
          />
        </Column>
      </div>
    </div>
  );
};
