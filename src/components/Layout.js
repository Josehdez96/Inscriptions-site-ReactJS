import React from "react"

import Navbar from "../components/Navbar.js"

function Layout (props) { //Sirve para ahorrar lineas de codigo repetidas
    return ( //React.Fragment reemplaza el <div> que se repite en ocasiones, tanto el <div> como <React.Fragment> 
             //nos sirve para que React funcione correctamente, ya que siempre debe retornar ||return|| un solo elemento
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout