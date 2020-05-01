import React from "react";

import confLogo from "../images/badge-header.svg"
import Gravatar from "./Gravatar"
import "../components/styles/Badge.css"

class Badge extends React.Component {
    render() { //Todos los componenes/clases deben tener obligatoriamente como minimo el metodo ||render()||, que es el resultado que veremos en pantalla 
        const hashPlatzi = "platziconf"

        return (
                <div className="Badge">
                    <div className="Badge__header"> 
                        <img src={confLogo} alt="Logo de la conferencia" />
                    </div>
                    <div className="Badge__section-name">
                        <Gravatar 
                        className="Badge__avatar"
                        email={this.props.email}
                        alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1> 
                    </div>
                    <div className="Badge__section-info"> 
                        <h3>{this.props.jobTitle}</h3>
                        <div>@{this.props.instagram}</div>
                    </div>
                    <footer className="Badge__footer">#{hashPlatzi}</footer>
                </div>
        )
    }
}


export default Badge;