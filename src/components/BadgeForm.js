import React from "react";

class BadgeForm extends React.Component {
    //state = {}; //Pasamos los input a controlados con este ||state = {}|| si quisieramos mantener la información en este compoennte ||BadgeForm||

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        // console.log({
        //     name: event.target.name,
        //     value: event.target.value,
        // })
        })        
    }

    handleClick = (event) => {
        console.log("Button was clicked")
    }

    handleSubmit = (event) => { //Enlazar eventos, conectando la acción del usuario con nuestros componentes de React
        event.preventDefault(); //El default es mandar la información del form a la URL directamente
        console.log("Form was submit")
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>NEW ATTENDANT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName} //Paso de no controlar a controlar el input, si quiesieramos mantener el valor en este componente pondríamos ||{this.state.firstName}||
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Instagram</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="instagram"
                        value={this.props.formValues.instagram}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}


export default BadgeForm;