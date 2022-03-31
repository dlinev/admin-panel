import {
  Checkbox,
  Radio,
  InputWithLabel,
  Button,
  Text,
  Column,
} from "../../components";

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
          >
            Новый
          </Checkbox>
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_2"
            id="dp_chk_item_2"
          >
            Рассчет
          </Checkbox>
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_3"
            id="dp_chk_item_3"
            checked={true}
          >
            Подтвержден
          </Checkbox>
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_4"
            id="dp_chk_item_4"
          >
            Отложен
          </Checkbox>
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_5"
            id="dp_chk_item_5"
          >
            Выполнен
          </Checkbox>
          <Checkbox
            className={classNamesCheckbox}
            key="dp_chk_item_6"
            id="dp_chk_item_6"
          >
            Отменен
          </Checkbox>
        </Column>

        <Column className={styles.block}>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            hiddenSelector={true}
            key="dp_rad_item_1"
            id="dp_rad_item_1"
            value="dp_radio_group"
          >
            Новый
          </Radio>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            hiddenSelector={true}
            key="dp_rad_item_2"
            id="dp_rad_item_2"
            value="dp_radio_group"
          >
            Рассчет
          </Radio>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            hiddenSelector={true}
            key="dp_rad_item_3"
            id="dp_rad_item_3"
            value="dp_radio_group"
            checked={true}
          >
            Подтвержден
          </Radio>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            hiddenSelector={true}
            key="dp_rad_item_4"
            id="dp_rad_item_4"
            value="dp_radio_group"
          >
            Отложен
          </Radio>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            hiddenSelector={true}
            key="dp_rad_item_5"
            id="dp_rad_item_5"
            value="dp_radio_group"
          >
            Выполнен
          </Radio>
          <Radio
            name="radioGroup2"
            className={classNamesRadio}
            hiddenSelector={true}
            key="dp_rad_item_6"
            id="dp_rad_item_6"
            value="dp_radio_group"
          >
            Отменен
          </Radio>
        </Column>
      </div>

      <div className={styles.blocks}>
        <Column className={styles.block}>
          <InputWithLabel placeholder="Введите номер" theme="default">
            Номер страницы
          </InputWithLabel>
        </Column>

        <Column className={styles.block}>
          <Text className={styles.text}>Удалить n-записей</Text>
          <Button className={styles.button} theme="flat" size="small">
            Удалить
          </Button>
          <Button className={styles.button} theme="default" size="small">
            Отменить
          </Button>
        </Column>

        <Column className={styles.block}>
          <Text className={styles.text}>Выберете тему</Text>
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
