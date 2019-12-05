import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/usuarios">Inicio</Link></li>
                    <li><Link to="/nuevo-usuario">Nuevo usuario</Link></li>
                </ul>
            </div>
        )
    }
}
