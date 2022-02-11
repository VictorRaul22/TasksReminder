import React from "react";
import "./header.css"

function TodoHeader({ children, loading }) {
  /* 
    usamos el clone element para colnar los elementos que seran enviados 
    como children en el componente header y con el reactClone le añadimos al elemento
    clonado un prop de loading
      {React.cloneElement(children, { loading })}

    si tenemos mas de un elemento en el children lo mas combeniente es usar Reac.Children
    para tranformar en un array
      {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
  */
  return (
    <div className="Todoheader">
      {React.Children.toArray(children).map(child => React.cloneElement(child, { loading }))}
    </div>
  )
}
export { TodoHeader }