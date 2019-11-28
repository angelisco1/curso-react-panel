import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Cuenta extends Component {

    render() {
        return (
            <div>
                {this.props.mostrarBotones ? <button type="button" onClick={this.props.decrementar}>-</button> : null}
                <span>cuenta: {this.props.cuenta}</span>
                <button type="button" onClick={this.props.incrementar} hidden={!this.props.mostrarBotones}>+</button>

                <button type="button" onClick={() => {this.props.incrementarVal(2)}} hidden={!this.props.mostrarBotones}>+</button>
            </div>
        )
    }
}

Cuenta.defaultProps = {
    mostrarBotones: true,
    cuenta: 2
}

Cuenta.propTypes = {
    mostrarBotones: PropTypes.bool,
    cuenta: PropTypes.number,
    incrementar: PropTypes.func,
    decrementar: PropTypes.func,
    incrementarVal: PropTypes.func,
}