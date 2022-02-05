import React from "react";
import "./CreateTodoSection.css"
import image from "../assets/image.png"
function CreateTodoSection() {
  return (
    <section className="CreateTodoSection">
      <h3 className="CreateTodoSection__title">Crear new Task</h3>
      <label className="CreateTodoSection__label">Task Name</label>
      <div className="CreateTodoSection__create">
        <input className="CreateTodoSection__input" placeholder="Write the task name" />
        <button className="CreateTodoSection__btn">Create task</button>
      </div>
      <img src={image} alt="iamgenes de tareas" className="CreateTodoSection__img" />
    </section>
  )
}
export { CreateTodoSection };