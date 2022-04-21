import cx from "classnames";

import styles from "./Modal.module.css";

export const Modal = ({ active, setActive, children }) => {
  const formClass = cx(styles.modal, {
    [styles.active]: active,
  });

  console.log("Modal", active);

  const contentClass = cx(styles.content, {
    [styles.active]: active,
  });

  return (
    <div className={formClass} onClick={() => setActive({ active: active })}>
      <div
        className={contentClass}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
