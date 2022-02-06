import React from "react";
import './CreateTodoButton.css';
/*
  Formas de agregar eventos
  -envolverlo en una funcion en un eneto onclick
  -pasarle una funcion ya echa al evento onclick
*/
function CreateTodoButton(props) {
  const onClickButton = () => {
    // if (props.openModal) {
    //   props.setOpenModal(false)
    // } else {
    //   props.setOpenModal(true)
    // }
    //otra opcion es esta, 
    props.setOpenModal(prevState => !prevState)
  }
  return (
    <button
      className={`btn ${props.openModal && "btn-aspa"}`}
      // onClick={() => console.log('click')}
      onClick={onClickButton}
    >+</button>
  )
}
export { CreateTodoButton }