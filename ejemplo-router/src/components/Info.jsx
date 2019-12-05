import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                <h2>Info {this.props.location.state} ({this.props.match.params.id})</h2>
            </div>
        )
    }
}
