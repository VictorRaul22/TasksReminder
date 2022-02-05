import React from 'react';
import './css/TodoCounter.css'

// const estilos = {
//   color: 'red',
//   backgroundColor: 'blue'
// }
//Una forma de agregarle estilos es ponerle la etiqueta style y pasarle los estilos en linea

function TodoCounter() {
  return (
    <h2 className='TodoCounter'>You have completed 1 of 4 tasks</h2>
  )
}
/* por buenas practicas es usar export y no export default 
  para almomento de importarlo obligar a que sea el mismo nombre y equivocarme
*/
export { TodoCounter };