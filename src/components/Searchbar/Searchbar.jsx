import cx from "classnames";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import { Input } from "../";

import styles from "./Searchbar.module.css";

export const Searchbar = ({
  placeholder = "Введите значение",
  className,
  value,
  onClear,
  onKeyDown,
  ...props
}) => {
  return (
    <div className={cx(styles._, className)}>
      <Input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onClear={onClear}
        onKeyDown={onKeyDown}
        {...props}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
};
