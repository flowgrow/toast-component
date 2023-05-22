import React from 'react';

import { createPortal } from 'react-dom';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return createPortal(
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant} handleDismiss={handleDismiss}>{message}</Toast>
        </li>))}
    </ol>,
    document.body
  );
}

export default ToastShelf;
