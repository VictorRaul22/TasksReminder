import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




//Cuando trabajamos con los componentes los atributos se convierten en argumentos
/*
  En este ejemplo la App le esta pasando a la funccion de App que es un componene el argumento de saludo
  con el valor de Oli
  --------------
  Si enves de psar un propiedad asemos una etiqueta de cierre y ponemos un valor entre la etiqueta,
  estaremos parando como argumento un varibale children
*/



ReactDOM.render(
  <App saludo="buenas" name="Victor" />,
  document.getElementById('root')
);

// ReactDOM.createPortal(
//   <App/>,
//   document.getElementById('modal')
//   )