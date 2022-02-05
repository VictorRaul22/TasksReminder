import React from "react";
import './css/Title.css'
function Title(props) {
  return (
    <h1 className="title">
      <i className="fas fa-clipboard-list title__icon"></i>
      {props.nameTitle}
    </h1>
  )
}
export { Title };