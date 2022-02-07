import React from "react";
import "./TodoItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
  // const onComplete = () => {
  //   alert('ya completaste el todo ' + props.text)
  // }
  // const onDelete = () => {
  //   alert('Borraste el todo ' + props.text)
  // }
  return (
    <li className={`TodoItem ${props.complete && 'TodoItem--completed'}`}>
      {/* <i className={`fas fa-check-circle icon TodoItem__check ${props.complete && 'TodoItem__check--completed'}`}
        onClick={props.onComplete}
      ></i> */}
      <div className={`icon TodoItem__check ${props.complete && 'TodoItem__check--completed'}`}
        onClick={props.onComplete}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <p className={`TodoItem__text-task ${props.complete && 'TodoItem__text-task--completed'}`}>{props.text}</p>
      {/* <i className="fas fa-times icon TodoItem__delete"
        onClick={props.onDelete}
      ></i> */}
      <div className="icon TodoItem__delete" onClick={props.onDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </li>
  )
}
export { TodoItem }