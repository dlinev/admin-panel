import cx from "classnames";
import { Text } from "../";

import styles from "./Button.module.css";

export const Button = ({
  icon: Icon,
  theme,
  size,
  text,
  className,
  onClick,
  ...props
}) => {
  const classNames = cx(styles._, className, {
    [styles[`theme_${theme}`]]: true,
    [styles[`size_${size}`]]: true,
    [styles.size_icon_only]: !text && Icon,
  });

  return (
    <button className={classNames} onClick={onClick} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {text && <Text className={styles.text}>{text}</Text>}
    </button>
  );
};
