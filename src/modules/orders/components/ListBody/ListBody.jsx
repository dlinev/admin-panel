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

  const handleCloseEditPanel = () => {
    setEditPanel({ active: false });
  };

  const ordersList = orders.map((order) => {
    const handleClickEditPanel = ({ target: { value } }) => {
      const { orderId } = value;
      console.log("handleClickEditPanel", orderId);
      const changeFilter = (order) => {
        setEditPanel({
          active: true,
          order: order,
        });
      };
      return changeFilter(value);
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
      <Modal active={editPanel.active} setActive={setEditPanel}>
        <EditPanel onClose={handleCloseEditPanel} />
      </Modal>
    </div>
  );
};
