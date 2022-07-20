import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const closeModalHandler = () => {
    props.onCloseModal();
  }
  return (
    <section>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <div className={styles['modal-section']}>
        <div className={styles["modal-title"]}>{props.errors.title}</div>
        <div className={styles["modal-content"]}>{props.errors.message}</div>
        <div className={styles["modal-btn-container"]}>
          <button className={styles["modal-btn"]} onClick={closeModalHandler}>
            Okay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
