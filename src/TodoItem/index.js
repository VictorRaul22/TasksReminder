import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
  // const onComplete = () => {
  //   alert('ya completaste el todo ' + props.text)
  // }
  // const onDelete = () => {
  //   alert('Borraste el todo ' + props.text)
  // }
  return (
    <li className={`TodoItem ${props.complete && 'TodoItem--completed'}`}>
      <i className={`fas fa-check-circle icon TodoItem__check ${props.complete && 'TodoItem__check--completed'}`}
        onClick={props.onComplete}
      ></i>
      <p className={`TodoItem__text-task ${props.complete && 'TodoItem__text-task--completed'}`}>{props.text}</p>
      <i className="fas fa-trash-alt icon TodoItem__delete"
        onClick={props.onDelete}
      ></i>
    </li>
  )
}
export { TodoItem }