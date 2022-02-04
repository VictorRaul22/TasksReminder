import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span>C</span>
      <p>{props.text}</p>
      <samp>X</samp>
    </li>
  )
}
export { TodoItem }