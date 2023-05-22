import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [chosenVariant, setChosenVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');

  const [toasts, setToasts] = React.useState([]);

  const handleDismiss = (id) => {
    console.log(id)
    setToasts(toasts.filter(elem => elem.id !== id))
  }

  const popToast = (event) => {
    event.preventDefault()
    const id = Date.now()
    setMessage("");
    setChosenVariant(VARIANT_OPTIONS[0]);
    setToasts([
      ...toasts,
      {
        id: id,
        variant: chosenVariant,
        message: message
      }
    ])
  }

  console.log(toasts)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form className={styles.controlsWrapper} onSubmit={popToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={event => {
              setMessage(event.target.value)
            }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map(variant => (
            <div
              key={variant}
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <label htmlFor={variant}>
                <input
                  id={variant}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={variant === chosenVariant}
                  onChange={event => {
                    setChosenVariant(event.target.value)
                  }}
                />
                {variant}
              </label>
            </div>
          ))}

        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
