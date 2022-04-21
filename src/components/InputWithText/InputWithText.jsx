import cx from "classnames";

import { Input, Text } from "../";

import styles from "./InputWithText.module.css";

export const InputWithText = ({
  placeholder = "Введите значение",
  className,
  text,
  onClear,
  ...props
}) => {
  return (
    <div className={cx(styles._, className)}>
      <Input
        className={styles.input}
        placeholder={placeholder}
        onClear={onClear}
        {...props}
      />
      {text && <Text className={styles.text}>{text}</Text>}
    </div>
  );
};
