import React from "react";
import useEscapeKey from "../../hooks/useEscape";

export const ToastContext = React.createContext();
export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);

  const dismissToast = (id) => {
    setToasts(toasts.filter(elem => elem.id !== id))
  }

  const createToast = (variant, message) => {

    const id = Date.now()
    setToasts([
      ...toasts,
      {
        id,
        variant,
        message
      }
    ])
  }

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])
  useEscapeKey(handleEscape)

  return (
    <ToastContext.Provider value={{
      toasts, createToast, dismissToast
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
