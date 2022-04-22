import { ReactComponent as SunIcon } from "../../../../icons/sun.svg";
import { Button, Text, Row } from "../../../../components";

import styles from "./HeaderContainer.module.css";

export const HeaderContainer = () => {
  return (
    <header className={styles._}>
      <Row>
        <Text className={styles.text} component="h2">
          Список заказов
        </Text>
      </Row>
      <Row>
        <Button
          className={styles.button}
          icon={SunIcon}
          theme="flat"
          size="big"
          text="Светлая тема"
        />
      </Row>
    </header>
  );
};
