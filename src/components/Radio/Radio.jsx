import { Text, Label } from "../";
import cx from "classnames";
import { useState } from "react";

import styles from "./Radio.module.css";

export const Radio = ({
  children,
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
        {children && <Text className={styles.text}>{children}</Text>}
      </Label>
    </div>
  );
};
