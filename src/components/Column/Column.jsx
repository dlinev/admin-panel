import cx from "classnames";

import styles from "./Column.module.css";

export const Column = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles._, className)} {...props}>
      {children}
    </div>
  );
};
