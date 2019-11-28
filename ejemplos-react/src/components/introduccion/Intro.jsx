import React, { Component } from 'react'
import CmpClase from './CmpClase'
import CmpFuncional from './CmpFuncional'

export default class Intro extends Component {
    render() {
        return (
            <div>
                <CmpClase />
                <CmpFuncional />
            </div>
        )
    }
}
