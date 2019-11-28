import React, { Component } from 'react'

export default class Referencias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sugus: [],
            sugusVal: ''
        }
        this.refSugus = React.createRef();
        this.refAudio = React.createRef();
        this.addSugus = this.addSugus.bind(this)
        this.changeSugusVal = this.changeSugusVal.bind(this);
    }

    addSugus(event) {
        // Con REFERENCIA (Evitar usarlas)
        const sugus = this.refSugus.current.value;
        const nuevosSugus = [...this.state.sugus, sugus];
        this.setState({
            sugus: nuevosSugus
        });
        this.refSugus.current.value = ''
        this.refAudio.current.play();

        // Sin REFERENCIA (actualizando el valor del input en el state)
        // const nuevosSugus = [...this.state.sugus, this.state.sugusVal];

    }

    changeSugusVal(event) {
        this.setState({sugusVal: event.target.value})
    }
    
    render() {
        const listaSugus = this.state.sugus.map((s) => {
            return <li>{s}</li>;
        })
        return (
            <div>
                <audio ref={this.refAudio} src="./sonido-piolin.m4a"></audio>
                <input type="text" ref={this.refSugus} onChange={this.changeSugusVal} />
                <button type="button" onClick={this.addSugus}>Añadir</button>
                <ul>
                    {listaSugus}
                </ul>
            </div>
        )
    }
}
