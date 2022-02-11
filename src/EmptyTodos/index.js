import React from "react";
import "./emptyTodos.css"
function EmptyTodos({ text }) {
  return (
    <div className="empty-container">
      <div className="empty-State">
        <i className="fas fa-tasks empty-State__icon"></i>
        <p className="empty-State__text">{text}</p>
      </div >
    </div>
  )
}
export { EmptyTodos }