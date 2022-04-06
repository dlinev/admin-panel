import cx from "classnames";
import { Text } from "../Text/Text";

import styles from "./Radio.module.css";

export const Radio = ({ text, checked, showSelector, className, ...props }) => {
  return (
    <div className={cx(styles._, className)}>
      <input
        className={styles.input}
        type="radio"
        defaultChecked={checked}
        {...props}
      />
      {showSelector && <span className={styles.iconWrapper} />}
      {text && <Text className={styles.text}>{text}</Text>}
    </div>
  );
};
