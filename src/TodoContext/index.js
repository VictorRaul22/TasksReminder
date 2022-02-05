import React from "react";
import { useLocalStora } from './useLocalStorage'
//Herramienta de react que nos premite crear contexto que 
//son las herremientas que nos dan provider y consumers, estos 
//nos permite compartir el esatdo por toda nuestra app
const TodoContext = React.createContext()

function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStora('TODOS_V1', []);
  const [search, setSearch] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  let expReg = new RegExp(search, "i")
  let searchTodos = []
  if (!search.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => expReg.test(todo.text));

  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  //React.useEffect este hook ejecutara cuando react tenga todo preparado
  console.log("primero")

  return (
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      search,
      setSearch,
      searchTodos,
      completeTodo,
      deleteTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
