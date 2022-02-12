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
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const { state, stateUpdate } = useTodos();
  const {
    error,
    loading,
    searchTodos,
    totalTodos,
    completedTodos,
    openModal,
    search,
  } = state;
  const {
    completeTodo,
    deleteTodo,
    setOpenModal,
    setSearch,
    addTodo,
    sincronizeTodos
  } = stateUpdate
  return (
    <React.Fragment>
      <Title nameTitle={"Your Tasks"} />
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        searchText={search}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos text={"You haven't pending tasks"} />}
        onEmptySearchResults={(searchText) => <EmptyTodos text={`You don't have task with the name ${searchText}`} />}
        render={(todo) => (
          <TodoItem key={todo.text}
            text={todo.text}
            complete={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {(todo) => (
          <TodoItem key={todo.text}
            text={todo.text}
            complete={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
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
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  )

}

export default App;
