import React from "react";

import "./styles/BadgeEdit.css"
import header from "../images/badge-header.svg"
import Badge from "../components/badge.js"
import BadgeForm from "../components/BadgeForm.js"
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "./api"

class BadgeEdit extends React.Component {
    state = {
        loading: true, //Porque comenzamos con una petición, comienza en true
        error: null,
        form: {
            firstName: "", //Dejar estos campos vacios soluciona el error en consola de "los input pasaron de No controlados a controlados"
            lastName: "",
            email: "",
            jobTitle: "",
            instagram: "",
    } } 

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId //Sirve para leer los parametros que pasamos por el path o URL
            )
            
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form, //Traemos el valor que contenía ||state.form|| para evitar sobreescribir ||firstName|| con ||lastName||
                [event.target.name]: event.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null })

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })

            this.props.history.push("/badges") //Si se resuelve correctamente, devuelvame automaticamente a la lista de badges
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError />
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
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
                        instagram = {this.state.form.instagram || "Your Instagram"} 
                        />
                        </div>  
                        <div className="col-6">
                        <h1>EDIT ATTENDANT</h1>
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                            /> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;