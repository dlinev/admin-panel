import { ReactComponent as XMediumIcon } from "../../../../icons/x-medium.svg";
import { ReactComponent as CheckmarkIcon } from "../../../../icons/checkmark.svg";
import cx from "classnames";

import {
  Button,
  Text,
  Row,
  Column,
  Input,
  Label,
} from "../../../../components";

import styles from "./EditPanel.module.css";
import { DropdownStatus } from "../DropdownStatus/DropdownStatus";

export const EditPanel = ({ onClose, ...props }) => {
  return (
    <Column>
      <Row className={styles._}>
        <Text className={styles.header} component="h2">
          Заявка #{props.name}
        </Text>
        <Button
          className={styles.button}
          theme="default"
          size="big"
          icon={XMediumIcon}
          onClick={onClose}
        />
      </Row>
      <Column className={styles.body}>
        <Label className={styles.label} text="Дата и время заказа" />
        <Input
          value="06.12.2021"
          placeholder="Введите"
          disabled={true}
          label="Дата и время заказа"
        />

        <Label className={styles.label} text="ФИО покупателя" />
        <Input placeholder="Введите" value="Степан" />

        <table className={styles.table}>
          <thead>
            <tr className={styles.table_header}>
              <th>Артикул</th>
              <th>Наименование</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.table_line}>
              <td>art.12024</td>
              <td>Стил блейдс фо грасс</td>
              <td>15 339 ₽</td>
            </tr>
            <tr className={styles.table_line}>
              <td>art.24600</td>
              <td>Газонокосилка Apple Magic Grass Remover</td>
              <td>82 664 ₽</td>
            </tr>
          </tbody>
          <tfoot>
            <th colspan="3" className={styles.table_footer}>
              Итоговая сумма: 98 003 ₽
            </th>
          </tfoot>
        </table>

        <Label className={styles.label} text="Уровень лояльности" />
        <Input
          value="Новичок"
          placeholder="Введите"
          disabled={true}
          label="Дата и время заказа"
        />

        <Label className={styles.label} text="Статус заказа" />

        <DropdownStatus
          className={styles.dropdown}
          onChange={() => {}}
          status={[]}
        />

        <Label className={styles.label} text="Код подтверждения" />
        <Input
          value="000"
          placeholder="Введите"
          invalid={true}
          label="Дата и время заказа"
        />
      </Column>

      <Row className={styles.footer}>
        <Text className={styles.text}>
          Ошибка или индикатор загрузки{props.name}
        </Text>
        <Button
          theme="default"
          size="big"
          icon={CheckmarkIcon}
          text="Сохранить"
          autoSize={true}
          onClick={() => {}}
        />
      </Row>
    </Column>
  );
};
