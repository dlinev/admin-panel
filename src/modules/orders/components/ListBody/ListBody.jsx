import { useState } from "react";

import { Modal } from "../../../../components/Modal/Modal";
import { ListItem, EditPanel } from "..";

import styles from "./ListBody.module.css";

export const ListBody = ({ orders, selectedOrders, onSelect }) => {
  const initialStateEditPanel = {
    active: false,
    order: {},
  };
  const [editPanel, setEditPanel] = useState(initialStateEditPanel);

  const handleClickEditPanel = ({ active, order }) => {
    console.log("handleClickEditPanel", active, order);
    setEditPanel({
      active: active,
      order: order,
    });
  };

  const ordersList = orders.map((order) => {
    return (
      <ListItem
        {...order}
        key={order.orderId}
        selectedOrders={selectedOrders}
        onSelect={onSelect}
        // onEditPanel={handleClickEditPanel({order: order})}
      />
    );
  });

  return (
    <div className={styles._}>
      {ordersList}
      <Modal active={editPanel.active} setActive={setEditPanel}>
        <EditPanel
        // onClose={handleClickEditPanel}
        />
      </Modal>
    </div>
  );
};
