import React, { Component } from 'react'

export default class Editar extends Component {
    render() {
        return (
            <div>
                <h2>Editar {this.props.location.state} ({this.props.match.params.id})</h2>
            </div>
        )
    }
}
