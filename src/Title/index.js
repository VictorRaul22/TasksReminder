import React from "react";
import './Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
function Title(props) {
  return (
    <h1 className="title">
      <FontAwesomeIcon icon={faClipboardList} />
      {/* <i className="fas fa-clipboard-list title__icon"></i> */}
      {props.nameTitle}
    </h1>
  )
}
export { Title };