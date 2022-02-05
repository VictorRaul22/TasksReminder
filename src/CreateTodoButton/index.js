import React from "react";
import './CreateTodoButton.css';
/*
  Formas de agregar eventos
  -envolverlo en una funcion en un eneto onclick
  -pasarle una funcion ya echa al evento onclick
*/
function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg)
  }
  return (
    <button
      className="btn"
      // onClick={() => console.log('click')}
      onClick={() => onClickButton("Aqui se deberia abrir el modal")}
    >+</button>
  )
}
export { CreateTodoButton }