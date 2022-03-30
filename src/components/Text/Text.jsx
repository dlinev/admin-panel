import cx from "classnames";

import styles from "./Text.module.css";

export const Text = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles._, className)} {...props}>
      {children}
    </div>
  );
};
