import { Label, Input } from "../";

import styles from "./InputWithLabel.module.css";

export const InputWithLabel = ({
  type = "text",
  placeholder = "Введите значение",
  children,
  invalid,
  disabled,
  value,
  className,
  ...props
}) => {
  return (
    <Label className={styles.label}>
      {children}
      <Input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        invalid={invalid}
        value={value}
        {...props}
      />
    </Label>
  );
};
