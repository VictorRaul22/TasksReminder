import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton';
import { Title } from '../Title';
import { CreateTodoSection } from '../CreateTodoSection';
import { Modal } from '../Modal';
import { TodosError } from '../TodoError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
function AppUI() {
  //Reach.useCOntext es un hook
  console.log("renderizado")
  const { loading, error, searchTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Title nameTitle={"Your Tasks"} />
      <TodoCounter />
      <TodoSearch />

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
        !openModal && <CreateTodoSection />
      }

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      {
        openModal &&
        <Modal>
          <CreateTodoSection />
        </Modal>
      }
    </React.Fragment>
  );
}
export { AppUI }

/*
name                                width   tipe  cost
@fortawesome/free-solid-svg-icons	  Solid	  fas		Free
@fortawesome/free-regular-svg-icons	Regular	far		Free
@fortawesome/free-brands-svg-icons	Brands	fab		Free
*/