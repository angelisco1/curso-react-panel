import React, { Component } from 'react'
import Leia from './Leia'
import Luke from './Luke'
import Contador from './Contador';

export default class DarthVader extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            nombreLeia: 'Leia',
            nombreLuke: 'Luke',
            // luke: {
            //     nombre: 'Luke',
            //     apellido: 'Skywalker',
            //     peliculasEnLasQueSale: [4, 5, 6]
            // }
        }
        this.cambiarNombres = this.cambiarNombres.bind(this);
    }

    cambiarNombres() {
        console.log(this);
        console.log('Has pulsado el boton');
        this.setState({
            nombreLuke: this.state.nombreLuke + '!'
        })
    }
    
    render() {
        return (
            <div>
                <button type="button" onClick={() => {
                    // console.log(this)
                    this.setState({
                        nombreLeia: this.state.nombreLeia + '!'
                    })
                }}>Cambiar Leia</button>
                <button type="button" onClick={this.cambiarNombres}>Cambiar Luke</button>
                <Leia nombre={this.state.nombreLeia} apellidos="Skywalker" />
                <Luke nombre={this.state.nombreLuke} />
                {/* <Leia nombre="Rey" /> */}
                <Luke />
                <Contador />
            </div>
        )
    }
}