import React, { Component } from 'react'

export default class ListaDatos extends Component {
    render() {
        const listaDatos = this.props.datos.map((dato) => {
            return <li key={dato.id}>{dato.joke}</li>
        })
        return (
            <div id="con-hover">
                {listaDatos}
            </div>
        )
    }
}
