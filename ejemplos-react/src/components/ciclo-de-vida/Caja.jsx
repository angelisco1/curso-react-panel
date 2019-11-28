import React, { Component } from 'react'
import { ctxModoNoche } from '../otras-cosas/Context';

export default class Caja extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            color: props.cuenta > -1 ? 'yellowgreen' : 'darkred',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.color !== nextState.color;
    }

    componentDidMount() {
        const idInterval = setInterval(() => {
            console.log('Interval...')
        }, 1000)
        this.setState({
            idInterval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.idInterval)
    }
    
    render() {
        const styles = {
            backgroundColor: this.state.color,
            width: '100px',
            height: '100px'
        }
        console.log('Se pinta')
        return (
            <div style={styles}>
                <ctxModoNoche.Consumer>
                    {(modoNoche) => {
                        const styles = {
                            backgroundColor: modoNoche ? 'black' : 'white',
                            width: '50px',
                            height: '50px'
                        }
                        return (
                            <div style={styles}></div>
                        )
                    }}
                </ctxModoNoche.Consumer>
            </div>
        )
    }
}
