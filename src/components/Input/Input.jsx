import { ReactComponent as XMediumIcon } from "../../icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "../../icons/locked.svg";

import cx from "classnames";

import { Row, Button } from "../";

import styles from "./Input.module.css";

export const Input = ({
  type = "text",
  placeholder = "Введите значениие",
  className,
  value,
  invalid,
  disabled,
  ...props
}) => {
  const rowClass = cx(styles.row, {
    [styles.invalid]: !!invalid,
    [styles.disabled]: !!disabled,
  });

  return (
    <Row className={rowClass}>
      <input
        className={cx(styles._, className)}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        {...props}
      />
      {disabled && (
        <LockedIcon className={cx(styles.icon, styles.icon_disabled)} />
      )}
      {value && !disabled && (
        <Button className={styles.button} icon={XMediumIcon} theme="error" />
      )}
    </Row>
  );
};
