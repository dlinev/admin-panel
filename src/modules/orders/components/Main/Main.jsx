import { ListHeader, ListBody, ListFooter } from "..";
import styles from "./Main.module.css";

import { connect } from "react-redux";
import orders from "../../data/orders.json";

export const Main = () => {
  return (
    <main className={styles._}>
      <div className={styles.list}>
        <ListHeader />
        <ListBody orders={orders} />
        <ListFooter />
      </div>
    </main>
  );
};

const mapStateToProps = function (state) {
  return {
    orders: state.ordersReducer.orders,
  };
};

connect(mapStateToProps)(Main);
