import React from "react";
function useStoreListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false);
  React.useEffect(() => {
    function onChange(change) {
      if (change.key === 'TODOS_V1') {
        setStorageChange(true)
      }
    }
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('storage', onchange);
    }
  }, []);
  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow: toggleShow
  }
}

export { useStoreListener }