//COMPONENTE === CLASE
//ELEMENTO === OBJETO

import React from 'react'; //OBLIGATORIO para usar JSX. Analogo de ||createElement||
import ReactDOM from 'react-dom'; //Necesario para Renderizar (mostrar en pantalla lo que hagamos)
import { createBrowserHistory } from 'history'; //Server Side Render
import { Router } from 'react-router'; //SSR de React Router
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './routes/App';

const history = createBrowserHistory();
const container = document.getElementById('app');

//ReactDOM.render(__qué__, __dónde__) //||que|| queremos renderizar y ||donde||
ReactDOM.hydrate(
  <Router history={history}>
    <App />
  </Router>,
  container
); //Cuando NO van los <  /> en ||.render|| está recibiendo un componente/clase, pero si es un elemento, hay que especificarselo con <elemento/>
