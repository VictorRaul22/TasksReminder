import React from "react";
import './TodoError.css'
function TodosError({ error }) {
  return <p className="error">{"Opsss Ocurrio un error - " + error}</p>
}
export { TodosError }