import React from "react";
import './TodosLoading.css'
function TodosLoading() {
  return (
    <div className="TodoList__tasks skeleton">
      <div className="TodoItem skeleton__item"></div>
      <div className="TodoItem skeleton__item"></div>
      <div className="TodoItem skeleton__item"></div>
      <div className="TodoItem skeleton__item"></div>
      <div className="TodoItem skeleton__item"></div>
    </div>
  )
}
export { TodosLoading }