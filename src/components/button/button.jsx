import cx from "classnames";
import { Text } from "../components";

import styles from "./Button.module.css";

export const Button = ({
  icon: Icon,
  theme,
  size,
  children,
  className,
  onClick = () => {},
  ...props
}) => {
  const classNames = cx(styles._, className, {
    [styles.theme_default]: theme === "default",
    [styles.theme_flat]: theme === "flat",
    [styles.theme_disabled]: theme === "disabled",
    [styles.size_big]: size === "big",
    [styles.size_small]: size === "small",
    [styles.size_icon_only]: !children,
  });

  const iconClass = cx(styles.icon, {
    [styles.icon_default]: theme === "default",
    [styles.icon_error]: theme === "error",
    [styles.icon_disabled]: theme === "disabled",
  });
  const textClass = cx({
    [styles.icon_text_big]: size === "big" && Icon,
    [styles.icon_text_small]: size === "small" && Icon,
  });

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {Icon && <Icon className={iconClass} />}
      {children && <Text className={textClass}>{children}</Text>}
    </button>
  );
};
