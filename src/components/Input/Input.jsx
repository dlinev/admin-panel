import { ReactComponent as XMediumIcon } from "../../icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "../../icons/locked.svg";

import cx from "classnames";

import { Row, Button } from "../";

import styles from "./Input.module.css";

export const Input = ({
  type = "text",
  placeholder = "Введите значениие",
  className,
  name,
  value,
  invalid,
  disabled,
  onClear,
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
        disabled={disabled}
        name={name}
        value={value}
        {...props}
      />
      {disabled && (
        <LockedIcon className={cx(styles.icon, styles.icon_disabled)} />
      )}
      {value && !disabled && (
        <Button
          className={styles.button}
          icon={XMediumIcon}
          theme="clear"
          onClick={onClear}
        />
      )}
    </Row>
  );
};
