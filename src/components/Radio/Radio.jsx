import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({ checked, showSelector, className, ...props }) => {
  return (
    <div className={cx(styles._, className)}>
      <input
        className={styles.input}
        type="radio"
        defaultChecked={checked}
        {...props}
      />
      {showSelector && <span className={styles.iconWrapper} />}
    </div>
  );
};
