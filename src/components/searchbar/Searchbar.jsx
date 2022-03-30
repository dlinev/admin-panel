import cx from "classnames";
import { Input, Button } from "../components.js";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as XMediumIcon } from "../../icons/x-medium.svg";

import styles from "./Searchbar.module.css";

export const Searchbar = ({
  placeholder = "Введите значение",
  className,
  ...props
}) => {
  const { value } = { ...props };

  const inputClass = cx(styles.input, {
    [styles.input_cancel]: !value,
  });

  return (
    <div className={cx(styles._, className)}>
      <SearchIcon className={styles.icon} />
      <Input className={inputClass} placeholder={placeholder} {...props} />
      {value && (
        <Button className={styles.button} theme="error" icon={XMediumIcon} />
      )}
    </div>
  );
};
