import React from "react";

import styles from "./modal.module.css";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Editar Tarefa</h2>
        {children}
        <div className={styles.actionsClose}>
          <i className="bi bi-x-circle" onClick={closeModal}>
            <p>close</p>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
