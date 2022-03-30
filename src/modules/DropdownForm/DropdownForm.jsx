import {
  Checkbox,
  Radio,
  InputWithLabel,
  Button,
  Text,
  Column,
} from "../../components/components";

import cx from "classnames";
import { ReactComponent as MoonIcon } from "../../icons/moon.svg";
import { ReactComponent as SunIcon } from "../../icons/sun.svg";

import styles from "./DropdownForm.module.css";

export const DropdownForm = () => {
  const classNamesCheckbox = cx(styles.item, styles.checkbox__item);
  const classNamesRadio = cx(styles.item, styles.radio__item);

  return (
    <div className={styles.frame}>
      <div className={styles.blocks}>
        <Column className={styles.block}>
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_1"
            id="dp_chk_item_1"
            text="Новый"
          />
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_2"
            id="dp_chk_item_2"
            text="Рассчет"
          />
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_3"
            id="dp_chk_item_3"
            text="Подтвержден"
            checked={true}
          />
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_4"
            id="dp_chk_item_4"
            text="Отложен"
          />
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_5"
            id="dp_chk_item_5"
            text="Выполнен"
          />
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_6"
            id="dp_chk_item_6"
            text="Отменен"
          />
        </Column>

        <Column className={styles.block}>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            classNameInput={styles.hidden}
            key="dp_rad_item_1"
            id="dp_rad_item_1"
            value="dp_radio_group"
            text="Новый"
          />
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            classNameInput={styles.hidden}
            key="dp_rad_item_2"
            id="dp_rad_item_2"
            value="dp_radio_group"
            text="Рассчет"
          />
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            classNameInput={styles.hidden}
            key="dp_rad_item_3"
            id="dp_rad_item_3"
            value="dp_radio_group"
            text="Подтвержден"
            checked={true}
          />
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            classNameInput={styles.hidden}
            key="dp_rad_item_4"
            id="dp_rad_item_4"
            value="dp_radio_group"
            text="Отложен"
          />
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            classNameInput={styles.hidden}
            key="dp_rad_item_5"
            id="dp_rad_item_5"
            value="dp_radio_group"
            text="Выполнен"
          />
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            classNameInput={styles.hidden}
            key="dp_rad_item_6"
            id="dp_rad_item_6"
            value="dp_radio_group"
            text="Отменен"
          />
        </Column>
      </div>

      <div className={styles.blocks}>
        <Column className={styles.block}>
          <InputWithLabel
            label="Номер страницы"
            placeholder="Введите номер"
            theme="default"
          />
        </Column>

        <Column className={styles.block}>
          <Text className={styles.text} text="Удалить n-записей" />
          <Button className={styles.button} theme="flat" size="small">
            Удалить
          </Button>
          <Button className={styles.button} theme="default" size="small">
            Отменить
          </Button>
        </Column>

        <Column className={styles.block}>
          <Text className={styles.text} text="Выберете тему" />
          <Button
            className={styles.button}
            theme="flat"
            size="small"
            icon={SunIcon}
          >
            Светлая
          </Button>
          <Button
            className={styles.button}
            theme="default"
            size="small"
            icon={MoonIcon}
          >
            Темная
          </Button>
        </Column>
      </div>
    </div>
  );
};
