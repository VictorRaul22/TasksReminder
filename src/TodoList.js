import React from 'react';
import './css/TodoList.css';
function TodoList(props) {
  return (
    <section className='TodoList'>
      <ul className='TodoList__tasks'>
        {props.children}
      </ul>
    </section>
  )
}
export { TodoList }