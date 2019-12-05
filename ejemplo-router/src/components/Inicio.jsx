import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Info from './Info';
import Editar from './Editar';
import EnlaceUsuario from './EnlaceUsuario';

export default class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [
                {id: 0, nombre: 'Falco'},
                {id: 1, nombre: 'Kozinski'},
            ]
        }
    }

    render() {
        const listaUsuarios = this.state.usuarios.map(usuario => {
            return (
                <EnlaceUsuario key={usuario.id} usuario={usuario} />
            )
        })
        return (
            <div>
                <h1>Inicio</h1>
                <ul>
                    {listaUsuarios}
                </ul>
                <Route path={this.props.match.url + "/:id/info"} component={ Info } />
                <Route path={this.props.match.url + "/:id/editar"} component={ Editar } />
            </div>
        )
    }
}
