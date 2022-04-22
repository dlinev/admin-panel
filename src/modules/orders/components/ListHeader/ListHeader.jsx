import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";
import cx from "classnames";

import { COLUMNS, SORT_DESCENDING } from "../../data/constants";

import { Checkbox } from "../../../../components";

import styles from "./ListHeader.module.css";

export const ListHeader = ({
  onClick,
  onSelected,
  isAllSelected,
  sortFields,
}) => {
  const headerColumns = COLUMNS.map(({ id, label }) => {
    const indexSort = sortFields.findIndex((item) => item.field === id);
    const isSorting = indexSort >= 0;
    const isReverseIcon = isSorting
      ? sortFields[indexSort].sorting === SORT_DESCENDING
      : false;

    return (
      <li key={id} className={styles.row}>
        <input
          className={styles.input}
          type="button"
          name={id}
          onClick={onClick}
          value={label}
        />
        {isSorting && (
          <VArrowIcon
            className={cx(styles.icon, {
              [styles.icon_reverse]: isReverseIcon,
            })}
          />
        )}
      </li>
    );
  });

  return (
    <div className={styles._}>
      <ul className={styles.item}>
        <li className={styles.row}>
          <Checkbox onChange={onSelected} checked={isAllSelected} />
        </li>
        {headerColumns}
      </ul>
    </div>
  );
};
