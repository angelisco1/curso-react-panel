import React, { Component } from 'react'
import axios from 'axios';

export default class ApiICNDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: []
        }
    }
    
    componentDidMount() {
        axios.get('http://api.icndb.com/jokes/random/3')
            .then((resp) => {
                this.setState({
                    datos: resp.data.value
                })
            })
    }
    
    render() {
        const listaFrases = this.state.datos.map((dato) => {
            return <li key={dato.id}>{dato.joke}</li>;
        })
        return (
            <div>
                <ul>
                    {listaFrases}
                </ul>
            </div>
        )
    }
}
