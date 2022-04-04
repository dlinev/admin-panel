import cx from "classnames";

import styles from "./Text.module.css";

export const Text = ({
  component: Component = "span",
  variant,
  noWrap = true,
  className,
  children,
}) => {
  const textClass = cx(
    cx(styles._, className, {
      [styles.noWrap]: noWrap,
      [styles[`variant_${variant}`]]: !!variant,
    })
  );

  return <Component className={textClass}>{children}</Component>;
};
