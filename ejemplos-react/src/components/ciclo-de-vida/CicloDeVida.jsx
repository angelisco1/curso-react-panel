import React, { Component } from 'react'
import Caja from './Caja';

export default class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 1,
            mostrarCaja: true
        }
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.changeMostrar = this.changeMostrar.bind(this)
    }

    incrementar() {
        this.setState({cuenta: this.state.cuenta + 1})
    }

    decrementar() {
        this.setState({cuenta: this.state.cuenta - 1})
    }

    changeMostrar() {
        this.setState({
            mostrarCaja: !this.state.mostrarCaja
        })
    }
    
    render() {
        return (
            <div>
                <button type="button" onClick={this.decrementar}>-</button>
                <span>Cuenta: {this.state.cuenta}</span>
                <button type="button" onClick={this.incrementar}>+</button>

                <button type="button" onClick={this.changeMostrar}>Destruir Caja</button>
                { this.state.mostrarCaja ? 
                    <Caja cuenta={this.state.cuenta} /> : 
                    null }
            </div>
        )
    }
}
