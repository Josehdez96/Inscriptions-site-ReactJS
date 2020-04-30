import React from "react";

import "./styles/BadgeNew.css"
import header from "../images/badge-header.svg"
import Badge from "../components/badge.js"
import BadgeForm from "../components/BadgeForm.js"

class BadgeNew extends React.Component {
    state = {form: {
        firstName: "", //Dejar estos campos vacios soluciona el error en consola de "los input pasaron de No controlados a controlados"
        lastName: "",
        email: "",
        jobTitle: "",
        instagram: "",
    } } //Comenzamos a "levantar el estado", traer información de un componente ||BadgeForm|| a otro ||BadgeNew|| y se le pasa abajo como un prop a ||<BadgeForm />||

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form, //Traemos el valor que contenía ||state.form|| para evitar sobreescribir ||firstName|| con ||lastName||
                [event.target.name]: event.target.value,
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                        firstName={this.state.form.firstName} //O puedo ponerle mi nombre "Jose Daniel" si quiero
                        lastName={this.state.form.lastName}  //Y aqui mi apellido "Hernandez"
                        email = {this.state.form.email}
                        jobTitle = {this.state.form.jobTitle}
                        instagram = {this.state.form.instagram}
                        />
                        </div>  
                        <div className="col-6">
                            <BadgeForm
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            /> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;