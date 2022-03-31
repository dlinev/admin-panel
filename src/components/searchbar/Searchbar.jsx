import cx from "classnames";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import { Input } from "../";

import styles from "./Searchbar.module.css";

export const Searchbar = ({
  placeholder = "Введите значение",
  className,
  value,
  ...props
}) => {
  return (
    <div className={cx(styles._, className)}>
      <Input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
};
