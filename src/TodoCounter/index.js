import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

// const estilos = {
//   color: 'red',
//   backgroundColor: 'blue'
// }
//Una forma de agregarle estilos es ponerle la etiqueta style y pasarle los estilos en linea

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>You have completed {completedTodos} of {totalTodos} tasks</h2>
  )
}
/* por buenas practicas es usar export y no export default 
  para almomento de importarlo obligar a que sea el mismo nombre y equivocarme
*/
export { TodoCounter };