import cx from "classnames";
import { Label, Text } from "../";

import styles from "./Checkbox.module.css";

export const Checkbox = ({ children, checked, className, ...props }) => {
  return (
    <div className={cx(styles._, className)}>
      <Label className={styles.label}>
        <input
          className={cx(styles.input, { [styles.input_space]: children })}
          type="checkbox"
          defaultChecked={checked}
          {...props}
        />

        <svg
          className={styles.icon}
          viewBox="0 0 16 16"
          fill="#FFF"
          stroke="none"
        >
          <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
        </svg>
        {children && <Text>{children}</Text>}
      </Label>
    </div>
  );
};
