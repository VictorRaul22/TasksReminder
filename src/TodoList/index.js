import React from 'react';
import './TodoList.css';
function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className='TodoList'>
      <div className='container-scroll'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.error && !props.totalTodos) && props.onEmptyTodos()}
        {
          (!!props.totalTodos && !props.searchTodos.length && props.searchText !== "")
          && props.onEmptySearchResults(props.searchText)
        }
        <ul className='TodoList__tasks'>
          {/* {props.searchTodos.map(todo => props.render(todo))} */}
          {/*ortra forma de iterar todos los todos*/}
          {(!props.loading && !props.error) && props.searchTodos.map(renderFunc)}
        </ul>
      </div>
    </section>
  )
}
export { TodoList }