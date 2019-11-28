import React, { Component } from 'react'

export default class Preview extends Component {
    render() {
        const listaSkills = this.props.skills.map(skill => {
            return <li>{skill}</li>
        })
        return (
            <div>
                <h2>{this.props.nombreCompleto}</h2>
                <p>Email: {this.props.email}</p>
                <ul>Skills:
                    {listaSkills}
                </ul>
            </div>
        )
    }
}
