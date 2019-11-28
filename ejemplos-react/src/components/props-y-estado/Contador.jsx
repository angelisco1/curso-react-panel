import React, { Component } from 'react'
import Cuenta from './Cuenta';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuenta: 0
        }
        this.resta = this.resta.bind(this);
        this.suma = this.suma.bind(this);
        this.sumaVal = this.sumaVal.bind(this);
    }

    resta() {
        this.setState({
            cuenta: this.state.cuenta - 1
        })
    }

    suma() {
        this.setState({
            cuenta: this.state.cuenta + 1
        })
    }

    sumaVal(val) {
        // alert('asdasdasd')
        this.setState({
            cuenta: this.state.cuenta + val
        })
    }
    
    render() {
        return (
            <div>
                <Cuenta
                    cuenta={this.state.cuenta}
                    incrementar={this.suma}
                    decrementar={this.resta}
                    incrementarVal={this.sumaVal} />
                <Cuenta
                    cuenta={this.state.cuenta}
                    mostrarBotones={false} />
                {/* <Cuenta
                    incrementar={this.suma}
                    decrementar={this.resta} /> */}
            </div>
        )
    }
}
