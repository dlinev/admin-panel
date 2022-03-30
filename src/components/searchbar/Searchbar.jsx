import cx from "classnames";
import { Input, Button } from "../components.js";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import styles from "./Searchbar.module.css";

export const Searchbar = ({
  placeholder = "Введите значение",
  className,
  ...props
}) => {
  const { value } = { ...props };

  const classNamesInput = cx(styles.input, {
    [styles.input_cancel]: !value,
  });

  return (
    <div className={cx(styles._, className)}>
      <SearchIcon className={styles.image} />
      <Input className={classNamesInput} placeholder={placeholder} {...props} />
      {value && <Button className={styles.button} theme="error" />}
    </div>
  );
};
