import cx from "classnames";
import { Label, Input, Text, Column } from "../components";

import styles from "./Checkbox.module.css";

export const Checkbox = ({ children, className, ...props }) => {
  const { checked } = { ...props };

  return (
    <div className={cx(styles._, className)}>
      <Label className={styles.label}>
        <Column className={cx(styles.item, { [styles.itemSpace]: children })}>
          <Input
            className={styles.input}
            type="checkbox"
            defaultChecked={checked}
            {...props}
          />

          <svg
            className={styles.image}
            viewBox="0 0 16 16"
            fill="#FFF"
            stroke="none"
          >
            <path
              d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
              stroke="none"
            />
          </svg>
        </Column>
        <Text className={styles.text}>{children}</Text>
      </Label>
    </div>
  );
};
