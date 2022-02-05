import React from "react";
import './css/TodoSearch.css';
function TodoSearch() {
  return (
    <div className="TodoSearch">
      <input className="input TodoSearch__input" placeholder="search your task" />
      <i className="fas fa-search TodoSearch__icon"></i>
    </div >
  )
}
export { TodoSearch }