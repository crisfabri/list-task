import React from 'react';
import styles from './modal.module.scss';

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
