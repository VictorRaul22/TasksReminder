import React from 'react';
import './TodoCounter.css'

// const estilos = {
//   color: 'red',
//   backgroundColor: 'blue'
// }
//Una forma de agregarle estilos es ponerle la etiqueta style y pasarle los estilos en linea

function TodoCounter(props) {
  const { total, completed } = props;
  return (
    <h2 className='TodoCounter'>You have completed {completed} of {total} tasks</h2>
  )
}
/* por buenas practicas es usar export y no export default 
  para almomento de importarlo obligar a que sea el mismo nombre y equivocarme
*/
export { TodoCounter };