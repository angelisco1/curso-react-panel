import React, { Component } from 'react'

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
    
    render() {
        const styles = {
            backgroundColor: this.state.color,
            width: '100px',
            height: '100px'
        }
        console.log('Se pinta')
        return (
            <div style={styles}>
                
            </div>
        )
    }
}
