import React from "react";
import "./header.css"

function TodoHeader({ children }) {
  return (
    <header className="header">
      {children}
    </header>
  )
}
export { TodoHeader }