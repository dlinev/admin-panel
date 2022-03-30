import { Text, Label, Input } from "../components";
import cx from "classnames";

import styles from "./Radio.module.css";

export const Radio = ({
  children,
  className,
  onChange = () => {},
  ...props
}) => {
  const { checked, hiddenSelector } = { ...props };

  const classNames = cx(styles._, {
    [className]: !!className,
  });
  const inputClass = cx(styles.input, {
    [styles.input_hidden]: !!hiddenSelector,
  });

  return (
    <div className={classNames}>
      <Label className={styles.label}>
        <Input
          className={inputClass}
          type="radio"
          defaultChecked={checked}
          onChange={onChange}
          {...props}
        />
        {children && <Text className={styles.text}>{children}</Text>}
      </Label>
    </div>
  );
};
