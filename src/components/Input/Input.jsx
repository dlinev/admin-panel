import cx from "classnames";

import styles from "./Input.module.css";

export const Input = ({
  type = "text",
  placeholder = "Введите значениие",
  className,
  onChange = () => {},
  ...props
}) => {
  return (
    <input
      className={cx(styles._, className)}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};
