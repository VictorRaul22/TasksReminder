import React from 'react';
import './TodoList.css';
function TodoList(props) {
  return (
    <section className='TodoList'>
      <div className='container-scroll'>
        <ul className='TodoList__tasks'>
          {props.children}
        </ul>
      </div>
    </section>
  )
}
export { TodoList }