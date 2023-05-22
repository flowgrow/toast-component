import React from 'react';

import { createPortal } from 'react-dom';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {

  const { toasts } = React.useContext(ToastContext)

  return createPortal(
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>{message}</Toast>
        </li>))}
    </ol>,
    document.body
  );
}

export default ToastShelf;
