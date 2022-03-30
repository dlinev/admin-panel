import cx from "classnames";

import { Label, Button, Input, Row } from "../components";
import { ReactComponent as XMediumIcon } from "../../icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "../../icons/locked.svg";

import styles from "./InputWithLabel.module.css";

export const InputWithLabel = ({
  type = "text",
  placeholder = "Введите значениеи",
  children,
  theme,
  size,
  className,

  onChange = () => {},
  onClick = () => {},
  ...props
}) => {
  const classNames = cx(styles._, className, {
    [styles.theme_error]: theme === "error",
    [styles.theme_disabled]: theme === "disabled",
  });
  let Icon;
  switch (theme) {
    case "error": {
      Icon = XMediumIcon;
      break;
    }
    case "disabled": {
      Icon = LockedIcon;
      break;
    }
    default:
      Icon = null;
  }
  return (
    <Label className={styles.label}>
      {children}
      <Row className={classNames}>
        <Input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          disabled={theme === "disabled"}
          {...props}
        />
        <Button
          className={styles.button}
          icon={Icon}
          theme={theme}
          size={size}
          onClick={onClick}
        />
      </Row>
    </Label>
  );
};
