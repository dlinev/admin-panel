import { useState } from "react";

import { Modal } from "../../../../components/Modal/Modal";
import { ListItem, EditPanel } from "..";

import styles from "./ListBody.module.css";

export const ListBody = ({ orders, selectedOrders, onSelect }) => {
  const initialStateEditPanel = {
    active: false,
    order: {
      orderId: "",
      orderDate: "",
      orderStatus: "",
      orderSum: "",
      orderCount: "",
      orderClient: "",
    },
  };
  const [editPanel, setEditPanel] = useState(initialStateEditPanel);

  const handleCloseEditPanel = () => {
    setEditPanel(initialStateEditPanel);
  };

  const ordersList = orders.map((order) => {
    const handleClickEditPanel = () => {
      const changeEditPanel = (order) => {
        setEditPanel({
          active: true,
          order: order,
        });
      };
      return changeEditPanel(order);
    };

    return (
      <ListItem
        {...order}
        key={order.orderId}
        selectedOrders={selectedOrders}
        onSelect={onSelect}
        onEditPanel={handleClickEditPanel}
      />
    );
  });

  return (
    <div className={styles._}>
      {ordersList}
      <Modal active={editPanel.active} setActive={handleCloseEditPanel}>
        <EditPanel order={editPanel.order} onClose={handleCloseEditPanel} />
      </Modal>
    </div>
  );
};
