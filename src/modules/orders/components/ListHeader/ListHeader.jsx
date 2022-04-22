import { ReactComponent as VArrowIcon } from "../../../../icons/v_arrow.svg";
import { COLUMNS } from "../../data/constants";

import { Checkbox } from "../../../../components";

import styles from "./ListHeader.module.css";

export const ListHeader = ({
  onClick,
  onSelected,
  isAllSelected,
  sortFields,
}) => {
  const headerColumns = COLUMNS.map(({ id, label }) => {
    return (
      <li key={id} className={styles.row}>
        <input
          className={styles.input}
          type="button"
          name={id}
          onClick={onClick}
          value={label}
        />
        {sortFields.includes(id) && <VArrowIcon className={styles.icon} />}
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
