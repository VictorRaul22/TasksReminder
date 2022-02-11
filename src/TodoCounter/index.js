import React from 'react';
import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${loading && "TodoCounter--loading"} `}>You have completed {completedTodos} of {totalTodos} tasks</h2>
  )
}
export { TodoCounter };