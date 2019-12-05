import React, { Component } from 'react'

export default class NuevoUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosGuardados: false
        }
        this.goToInicio = this.goToInicio.bind(this);
    }
    
    goToInicio() {
        if (this.state.datosGuardados || confirm('Estas seguro de que quieres salir? Perderas los datos que no has guardado...')) {
            this.props.history.push('/');
        }
    }
        
    render() {
        // console.log(this.props);
        return (
            <div>
                <h1>Nuevo usuario</h1>
                <button type="button" onClick={this.goToInicio}>Crear</button>
            </div>
        )
    }
}
