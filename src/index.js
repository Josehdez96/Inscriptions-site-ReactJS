//COMPONENTE === CLASE
//ELEMENTO === OBJETO

import React from 'react'; //OBLIGATORIO para usar JSX. Analogo de ||createElement||
import ReactDOM from 'react-dom'; //Necesario para Renderizar (mostrar en pantalla lo que hagamos)
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './components/App';

const container = document.getElementById('app');

//ReactDOM.render(__qué__, __dónde__) //||que|| queremos renderizar y ||donde||
ReactDOM.render(<App />, container); //Cuando NO van los <  /> en ||.render|| está recibiendo un componente/clase, pero si es un elemento, hay que especificarselo con <elemento/>
