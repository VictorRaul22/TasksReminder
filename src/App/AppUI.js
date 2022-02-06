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
function AppUI() {
  //Reach.useCOntext es un hook
  const { loading, error, searchTodos, completeTodo, deleteTodo } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <Title nameTitle={"Your Tasks"} />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Cargando</p>}
        {error && <p>error</p>}
        {(!loading && !searchTodos.length) && <p>Crea tu primer todo</p>}
        {searchTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            complete={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoSection />
      <CreateTodoButton />
      <Modal>
        <p>{searchTodos[0]?.text}</p>
      </Modal>
    </React.Fragment>
  );
}
export { AppUI }