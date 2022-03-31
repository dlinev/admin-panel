import { Text, Label, Input } from "../";
import cx from "classnames";

import styles from "./Radio.module.css";

export const Radio = ({
  children,
  checked,
  hiddenSelector,
  className,
  onChange = () => {},
  ...props
}) => {
  const inputClass = cx(styles.input, {
    [styles.input_hidden]: !!hiddenSelector,
  });

  return (
    <div className={cx(styles._, className)}>
      <Label className={styles.label}>
        <input
          className={inputClass}
          type="radio"
          defaultChecked={checked}
          onChange={onChange}
          {...props}
        />
        {children && <Text className={styles.text}>{children}</Text>}
      </Label>
    </div>
  );
};
