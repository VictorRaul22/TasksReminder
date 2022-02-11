import React from "react";
import ReactDOM from "react-dom";
import { useStoreListener } from "./useStoreListener";
import "./ChangeAlert.css"
function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStoreListener(sincronize);
  if (show) {
    return ReactDOM.createPortal(
      <div className="changeAlert-bg">
        <div className="changeAlert-container">
          <p className="changeAlert-container__info">There have been changes to the tasks in another browser window </p>
          <p className="changeAlert-container__question">Are you want synchronize the tasks?</p>
          <button className="changeAlert-container__btn" onClick={toggleShow}>Yes!</button>
        </div>
      </div>,
      document.getElementById('alert')
    );
  } else {
    return null
  }

}

export { ChangeAlert };