import { Column, Button } from "../../components";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import styles from "./ButtonForm.module.css";

export const ButtonForm = () => {
  return (
    <div className={styles.frame}>
      <Column className={styles.column}>
        <Column className={styles.block}>
          <Button
            className={styles.button_auto_size}
            theme="default"
            size="big"
            icon={SearchIcon}
          >
            Text here
          </Button>

          <Button
            className={styles.button_auto_size}
            theme="default"
            size="big"
          >
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="default"
            size="big"
            icon={SearchIcon}
          />
        </Column>

        <Column className={styles.block}>
          <Button
            className={styles.button_auto_size}
            theme="default"
            size="small"
            icon={SearchIcon}
          >
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="default"
            size="small"
          >
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="default"
            size="small"
            icon={SearchIcon}
          />
        </Column>
      </Column>

      <Column className={styles.column}>
        <Column className={styles.block}>
          <Button
            className={styles.button_auto_size}
            theme="flat"
            size="big"
            icon={SearchIcon}
          >
            Text here
          </Button>
          <Button className={styles.button_auto_size} theme="flat" size="big">
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="flat"
            size="big"
            icon={SearchIcon}
          />
        </Column>
        <Column className={styles.block}>
          <Button
            className={styles.button_auto_size}
            theme="flat"
            size="small"
            icon={SearchIcon}
          >
            Text here
          </Button>
          <Button className={styles.button_auto_size} theme="flat" size="small">
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="flat"
            size="small"
            icon={SearchIcon}
          />
        </Column>
      </Column>

      <Column className={styles.column}>
        <Column className={styles.block}>
          <Button
            className={styles.button_auto_size}
            theme="disabled"
            size="big"
            icon={SearchIcon}
          >
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="disabled"
            size="big"
          >
            Text here
          </Button>
          <Button
            className={styles.button_auto_size}
            theme="disabled"
            size="big"
            icon={SearchIcon}
          />
        </Column>
      </Column>
    </div>
  );
};
