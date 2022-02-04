import logo from './logo.svg';
import './App.css';

/*
  ClassName= class
  {algo } sirver para tener valores varibales de una propiedad y no algo constante
-------------------------------------------
  Por combecion a los parametros de los componentes se le llama propiedades(props),
  como en el index.js le pase como propiedad saludar puedo agarralo en el app como un parametro

  todos los parametros estaran en el objeto props ,siq ueremos uno en especifico podemos hacer la 
  destructuracion let {saludo,saludo2,...}=props
*/

function App(props) {
  //jsx es tranformado a js con babel
  //
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      </header>
    </div>
  );
}

export default App;
