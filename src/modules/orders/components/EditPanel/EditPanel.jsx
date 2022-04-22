import { ReactComponent as XMediumIcon } from "../../../../icons/x-medium.svg";
import { ReactComponent as CheckmarkIcon } from "../../../../icons/checkmark.svg";

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

export const EditPanel = ({
  order: { orderId, orderDate, orderStatus, orderClient },
  onClose,
  ...props
}) => {
  return (
    <Column>
      <Row className={styles._}>
        <Text className={styles.header} component="h2">
          Заявка #{orderId}
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
          placeholder="Введите"
          disabled={true}
          label="Дата и время заказа"
          value={orderDate}
          onChange={() => {}}
        />

        <Label className={styles.label} text="ФИО покупателя" />
        <Input placeholder="Введите" value={orderClient} onChange={() => {}} />

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
              <td>12024</td>
              <td>Стил блейдс фо грасс</td>
              <td>15 339 ₽</td>
            </tr>
            <tr className={styles.table_line}>
              <td>24600</td>
              <td>Газонокосилка Apple Magic Grass Remover</td>
              <td>82 664 ₽</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3" className={styles.table_footer}>
                Итоговая сумма: 98 003 ₽
              </th>
            </tr>
          </tfoot>
        </table>

        <Label className={styles.label} text="Уровень лояльности" />
        <Input
          placeholder="Введите"
          disabled={true}
          label="Дата и время заказа"
          value="Новичок"
          onChange={() => {}}
        />

        <Label className={styles.label} text="Статус заказа" />

        <DropdownStatus
          className={styles.dropdown}
          status={[]}
          value={orderStatus}
          onChange={() => {}}
        />

        <Label className={styles.label} text="Код подтверждения" />
        <Input
          placeholder="Введите"
          invalid={true}
          label="Дата и время заказа"
          value="000"
          onChange={() => {}}
        />
      </Column>

      <Row className={styles.footer}>
        <Text className={styles.text}>Ошибка или индикатор загрузки</Text>
        <Button
          theme="default"
          size="big"
          icon={CheckmarkIcon}
          text="Сохранить"
          autoSize={true}
          onClick={onClose}
        />
      </Row>
    </Column>
  );
};
