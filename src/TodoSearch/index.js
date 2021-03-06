import React from "react";
import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// react solo te permite retornar un componente o un array
function TodoSearch({ search, setSearch, loading }) {
  const onSearchValueChange = (e) => {
    //console.log(e.target.value)
    setSearch(e.target.value)

  }
  // para conectarlo es obligatorio poner en el valor el estado de search ,dicho por react 
  return (
    <div className="TodoSearch">
      <input
        className="input TodoSearch__input"
        placeholder="search your task"
        onChange={onSearchValueChange}
        value={search}
        disabled={loading}
      />
      {/* <i className="fas fa-search TodoSearch__icon"></i> */}
      <div className="TodoSearch__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div >
  )
}
export { TodoSearch }
