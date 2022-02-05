import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI'
/*
  ClassName= class
  {algo } sirver para tener valores varibales de una propiedad y no algo constante
-------------------------------------------
  Por combecion a los parametros de los componentes se le llama propiedades(props),
  como en el index.js le pase como propiedad saludar puedo agarralo en el app como un parametro

  todos los parametros estaran en el objeto props ,siq ueremos uno en especifico podemos hacer la 
  destructuracion let {saludo,saludo2,...}=props
*/

/*
  para tener logica dentro de un componente del return hay dos formas
  {todos.map(todo=>{
    return(...)
  })}
  o hay otra mas usuada
  {todos.map(todo=>(
    ...
  ))}
  ---------------
  cada componente de react solo soporta que le envia un solo componente, para solucionar esto
  puedes crear un div que englobe todo el componenete pero al momento de trabajar con css eso 
  se puede complicar.
  Otra opcion es pedirle a reac que nos renderice un etiquete invisible <React.fragment></React.fragment>
  ---------------
  Cuando tenermos que iterar un componenete ,tenemos que pasarle un identificador unico con key={}
*/

//Se puede compartir el estado con barios componeentes,pero ten cuidado puede explotar :v





function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )

}

export default App;
