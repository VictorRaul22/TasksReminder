import React from "react";
import "./emptyTodos.css"
function EmptyTodos() {
  return (
    <div className="empty-State">
      <i className="fas fa-tasks empty-State__icon"></i>
      <p className="empty-State__text">You haven't pending tasks</p>
    </div >
  )
}
export { EmptyTodos }