import { Text, Label } from "../";
import cx from "classnames";

import styles from "./Radio.module.css";

export const Radio = ({
  label,
  checked,
  hiddenSelector,
  className,
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
          {...props}
        />
        {label && <Text className={styles.text}>{label}</Text>}
      </Label>
    </div>
  );
};
