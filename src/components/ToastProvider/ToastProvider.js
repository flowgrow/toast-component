import React from "react";

export const ToastContext = React.createContext();
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);

  const handleDismiss = (id) => {
    console.log(id)
    setToasts(toasts.filter(elem => elem.id !== id))
  }


  console.log(toasts)

  return (
    <ToastContext.Provider value="asldj">
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
