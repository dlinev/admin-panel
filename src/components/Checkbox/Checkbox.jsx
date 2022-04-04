import cx from "classnames";
import { ReactComponent as IconCheckmark } from "../../icons/checkmark.svg";

import styles from "./Checkbox.module.css";

export const Checkbox = ({ checked, className, ...props }) => {
  return (
    <div className={cx(styles._, className)}>
      <input
        className={styles.input}
        type="checkbox"
        defaultChecked={checked}
        {...props}
      />

      <span className={styles.iconWrapper}>
        <IconCheckmark className={styles.icon} />
      </span>
    </div>
  );
};