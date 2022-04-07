import { ListHeader, ListBody, ListFooter } from "../";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader />
        <ListBody />
        <ListFooter />
      </div>
    </main>
  );
};
