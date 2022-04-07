import { ListHeader, List, ListFooter } from "../";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles._}>
      <ListHeader />
      <List />
      <ListFooter />
    </main>
  );
};
