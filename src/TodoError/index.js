import React from "react";
import './TodoError.css'
function TodosError({ error }) {
  return (
    <div className="container-error">
      <p className="error">{"Opsss Ocurrio un error - " + error}</p>
    </div>
  )
}
export { TodosError }