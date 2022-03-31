import cx from "classnames";

import styles from "./Text.module.css";

export const Text = ({ children, component = "span", className, ...props }) => {
  return (
    <span className={cx(styles._, className)} {...props}>
      {children}
    </span>
  );
};
