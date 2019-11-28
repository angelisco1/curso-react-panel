import React, { Component } from 'react'

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'Angel',
            apellido: 'V',
        }
        this.changeNombre = this.changeNombre.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    changeNombre(event) {
        const nuevoValor = event.target.value;
        const clave = event.target.name;
        // console.log('Event: ', event);
        this.setState({
            [clave]: nuevoValor,
        })
    }

    guardar(event) {
        event.preventDefault();
        setTimeout(() => {
            alert(JSON.stringify(this.state, null, 4));
            this.setState({
                nombre: ''
            })
        }, 500);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.guardar}>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={this.state.nombre} onChange={this.changeNombre} />
                    </div>
                    <div>
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" value={this.state.apellido} onChange={this.changeNombre} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
