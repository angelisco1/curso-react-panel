import React, { Component } from 'react'
import Caja from './Caja';

export default class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 1
        }
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar() {
        this.setState({cuenta: this.state.cuenta + 1})
    }

    decrementar() {
        this.setState({cuenta: this.state.cuenta - 1})
    }
    
    render() {
        return (
            <div>
                <button type="button" onClick={this.decrementar}>-</button>
                <span>Cuenta: {this.state.cuenta}</span>
                <button type="button" onClick={this.incrementar}>+</button>
                <Caja cuenta={this.state.cuenta} />
            </div>
        )
    }
}
