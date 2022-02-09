import React from 'react';
import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <h2 className='TodoCounter'>You have completed {completedTodos} of {totalTodos} tasks</h2>
  )
}
export { TodoCounter };