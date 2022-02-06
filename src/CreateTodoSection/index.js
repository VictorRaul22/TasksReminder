import React from "react";
import "./CreateTodoSection.css"
import image from "../assets/image.png"
import { TodoContext } from "../TodoContext";

function CreateTodoSection() {
  let { openModal, setOpenModal, addTodo } = React.useContext(TodoContext)
  const onAdd = (e) => {
    e.preventDefault();
    addTodo(e.target['textArea'].value);
    e.target['textArea'].value = "";
    setOpenModal(false);
  }
  return (
    <section className={`CreateTodoSection ${openModal && "visibility"}`}>
      <h3 className="CreateTodoSection__title">Crear new Task</h3>
      <form onSubmit={onAdd}>
        <label className="CreateTodoSection__label">Task Name</label>
        <div className="CreateTodoSection__create">
          <textarea name="textArea" className="CreateTodoSection__input" placeholder="Write the task name" />
          <button
            type="submit"
            className="CreateTodoSection__btn"
          >Create task</button>
        </div>
      </form>
      <img src={image} alt="iamgenes de tareas" className="CreateTodoSection__img" />
    </section>
  )
}
export { CreateTodoSection };