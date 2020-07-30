// const element = document.createElement("h1") //Crear un nuevo elemento
// element.innerText = "Hello, Platzi Practicas"; //El elemento va a tener un texto dentro

// const container = document.getElementById("app") //Donde queremos ponerlo? dentro del HTML ||<div>|| con ||id="app"||

// container.appendChild(element) //Que queremos añadir? el ||element|| creado mas arriba

import React from 'react'; //OBLIGATORIO para usar JSX. Analogo de ||createElement||
import ReactDOM from 'react-dom'; //Analogo ||appendChild||

import Badge from './components/badge';

// const name = "Jose"
// const sum = () => {
//     return 3 + 3
// }

//const element = React.createElement("h1", { }, "Hola, soy los children!") //Es lo mismo que el JSX de abajo
//const jsx = <h1>Hola, soy {name}</h1> //Lo que va dentro de { } es una expresión,EJ: ||{sum()}|| osea, se va a evaluar y su resultado es lo que se va a mostrar en pantalla

// const jsx = <div>
//     <h1>Hola, soy Richard</h1>
//     <p>Soy ingeniero Frontend</p>
// </div>;

const container = document.getElementById('app');

//ReactDOM.render(__qué__, __dónde__) //||que|| queremos renderizar y ||donde||
ReactDOM.render(<Badge />, container); //Cuando no van los < o /> ||.render|| está recibiendo un componente/clase, pero si es un elemento, hay que especificarselo con <elemento/>
