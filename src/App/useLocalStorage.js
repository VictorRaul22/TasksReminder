import React from "react";
function useLocalStora(itemName, initialValue) {
  const [
    state,
    dispatch
  ] = React.useReducer(reducer, initialState({ initialValue }));
  const { sincronizedItem, error, loading, item } = state
  const onError = (error) => dispatch({ type: actionTypes.ERROR, payload: error })
  const onSuccess = (parseItem) => {
    dispatch({ type: actionTypes.SUCCESS, payload: parseItem })
  }
  const onSave = (item) => dispatch({
    type: actionTypes.SAVE,
    payload: item
  })
  const onSincronize = () => dispatch({
    type: actionTypes.SINCRONIZE
  })
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
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 3000)
  }, [sincronizedItem])
  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      // setItem(newTodos)
      onSave(newTodos)
    } catch (error) {
      onError(error)
    }
  }
  const sincronizeItem = () => {
    onSincronize();
  }
  // por convencion de react si hay mas de 2 valores en el custom hook se tieen que enviar un objeto
  return { item, saveItem, loading, error, sincronizeItem };
}
const initialState = ({ initialValue }) => ({
  sincronizeItem: true,
  error: false,
  loading: true,
  item: initialValue
});
const actionTypes = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  SAVE: 'SAVE',
  SINCRONIZE: 'SINCRONIZE'

}
const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true,
  },
  [actionTypes.SUCCESS]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.SAVE]: {
    ...state
    , item: payload
  },
  [actionTypes.SINCRONIZE]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },


})
const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}
export { useLocalStora }