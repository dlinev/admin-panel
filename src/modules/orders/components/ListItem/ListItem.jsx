import { ReactComponent as AbortIcon } from "../../../../icons/abort.svg";
import { ReactComponent as DotIcon } from "../../../../icons/dot.svg";
import { ReactComponent as CheckmarkIcon } from "../../../../icons/checkmark.svg";

import cx from "classnames";

import { Label, Checkbox, Text, Row } from "../../../../components";
import styles from "./ListItem.module.css";

const STATUS = [
  {
    id: "NEW",
    text: "Новый",
    icon: <DotIcon />,
    style: "status_new",
  },
  {
    id: "CALC",
    text: "Рассчет",
    icon: <DotIcon />,
    style: "status_calc",
  },
  {
    id: "APROVE",
    text: "Подтвержден",
    icon: <DotIcon />,
    style: "status_aprove",
  },
  {
    id: "HOLD",
    text: "Отложен",
    icon: <DotIcon />,
    style: "status_hold",
  },
  {
    id: "DONE",
    text: "Выполнен",
    icon: <CheckmarkIcon />,
    style: "status_done",
    style_text: "status_done",
  },
  {
    id: "ABORT",
    text: "Отменен",
    icon: <AbortIcon />,
    style: "status_abort",
    style_text: "status_abort",
  },
];

export const ListItem = ({
  orderId,
  orderDate,
  orderStatus,
  orderCount,
  orderSum,
  orderClient,
}) => {
  const status = STATUS.find(({ text }) => text === orderStatus);
  const iconClass = cx(styles.icon, {
    [styles[status.style]]: true,
  });

  return (
    <li className={styles._}>
      <Label className={styles.label}>
        <ul className={styles.item}>
          <li className={styles.row}>
            <Checkbox className={styles.checkbox} />
          </li>
          <li className={styles.row}>
            <Text className={styles.text}>{orderId}</Text>
          </li>
          <li className={styles.row}>
            <Text className={styles.text} type="datetime">
              {orderDate}
            </Text>
          </li>
          <li className={styles.row}>
            <Row>
              <div className={iconClass}>{status.icon}</div>
              <Text className={styles[status.style_text]}>{orderStatus}</Text>
            </Row>
          </li>
          <li className={styles.row}>
            <Text className={styles.text}>{orderCount}</Text>
          </li>
          <li className={styles.row}>
            <Text className={styles.text}>
              {orderSum}
              {orderSum === "-" || orderSum === null ? "" : " ₽"}
            </Text>
          </li>
          <li className={styles.row}>
            <Text className={styles.text}>{orderClient}</Text>
          </li>
        </ul>
      </Label>
    </li>
  );
};
