import { Text } from "../../../../components";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles._}>
      <div>
        <Text className={styles.text} component="h2">
          Page header
        </Text>
      </div>
    </header>
  );
};
