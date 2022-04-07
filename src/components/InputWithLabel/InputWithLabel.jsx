import { Label, Input } from "../";

import styles from "./InputWithLabel.module.css";

export const InputWithLabel = ({
  type = "text",
  placeholder = "Введите значение",
  label,
  invalid,
  disabled,
  value,
  className,
  ...props
}) => {
  return (
    <Label className={styles.label}>
      {label}
      <div className={styles.space} />
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
