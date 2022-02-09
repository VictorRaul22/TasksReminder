import React from 'react';
import { useTodos } from './useTodos';
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { Title } from '../Title';
import { CreateTodoSection } from '../CreateTodoSection';
import { Modal } from '../Modal';
import { TodosError } from '../TodoError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'

function App(props) {
  const {
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    search,
    setSearch,
    completedTodos,
    totalTodos,
    addTodo
  } = useTodos();
  return (
    <React.Fragment>
      <Title nameTitle={"Your Tasks"} />
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
      </TodoHeader>
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError error={error} />}
        {(!loading && !error && !searchTodos.length) && <EmptyTodos />}
        {searchTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            complete={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {
        !openModal &&
        <CreateTodoSection
          openModal={openModal}
          setOpenModal={setOpenModal}
          addTodo={addTodo}
        />
      }

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {
        openModal &&
        <Modal>
          <CreateTodoSection
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      }
    </React.Fragment>
  )

}

export default App;
