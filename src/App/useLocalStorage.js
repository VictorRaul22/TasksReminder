import React from "react";
function useLocalStora(itemName, initialValue) {
  const [sincronizedItem, setsincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  //useEfect es un hook de react que no ayuda a ejecutar el codigo despues del render de React
  //pero antes del render del DOM
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        //throw new Error("404 not Found")
        setItem(parsedItem)
        setLoading(false)
        setsincronizedItem(true)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  }, [sincronizedItem])
  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos)
    } catch (error) {
      setError(error)
    }
  }
  const sincronizeItem = () => {
    setLoading(true);
    setsincronizedItem(false)
  }
  // por convencion de react si hay mas de 2 valores en el custom hook se tieen que enviar un objeto
  return { item, saveItem, loading, error, sincronizeItem };
}
export { useLocalStora }