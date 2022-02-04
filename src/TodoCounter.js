import React from 'react';
function TodoCounter() {
  return (
    <h2>Has completad 2 de 3 TODOs</h2>
  )
}
/* por buenas practicas es usar export y no export default 
  para almomento de importarlo obligar a que sea el mismo nombre y equivocarme
*/
export { TodoCounter };