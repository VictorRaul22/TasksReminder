import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
// react solo te permite retornar un componente o un array
function TodoSearch() {
  const { search, setSearch } = React.useContext(TodoContext)
  const onSearchValueChange = (e) => {
    //console.log(e.target.value)
    setSearch(e.target.value)

  }
  // para conectarlo es obligatorio poner en el valor el estado de search ,dicho por react 
  return (
    <div className="TodoSearch">
      <input className="input TodoSearch__input" placeholder="search your task"
        onChange={onSearchValueChange}
        value={search}
      />
      <i className="fas fa-search TodoSearch__icon"></i>
    </div >
  )
}
export { TodoSearch }
