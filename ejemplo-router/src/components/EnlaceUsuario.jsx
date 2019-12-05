import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class EnlaceUsuario extends Component {
    render() {
        const usuario = this.props.usuario;
        return (
            <li>
                {usuario.nombre}:
                <Link to={{pathname: `${this.props.match.url}/${usuario.id}/editar`, state: usuario.nombre}}>Editar</Link>
                <Link to={{pathname: `${this.props.match.url}/${usuario.id}/info`, state: usuario.nombre}}>Información</Link>
            </li>
        )
    }
}

export default withRouter(EnlaceUsuario);
