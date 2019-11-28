import React, { Component } from 'react'
import Caja from '../ciclo-de-vida/Caja';

export const ctxModoNoche = React.createContext()

export default class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modoNoche: false
        }
        this.toggleModoNoche = this.toggleModoNoche.bind(this);
    }

    toggleModoNoche() {
        this.setState({
            modoNoche: !this.state.modoNoche
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={this.toggleModoNoche}>Activar Modo Noche</button>

                <ctxModoNoche.Provider value={this.state.modoNoche}>
                    <Caja />
                </ctxModoNoche.Provider>
            </React.Fragment>
        )
    }
}
