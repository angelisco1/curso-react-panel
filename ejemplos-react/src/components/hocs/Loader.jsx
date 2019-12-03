import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        const styles = {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: '0',
            left: '0'
        }
        return (
            <div style={styles}>
                <p>Cargando...</p>
            </div>
        )
    }
}
