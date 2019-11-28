import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Luke extends Component {
    // static get defaultProps() {
    //     return {
    //         nombre: 'OOOOOO'
    //     }
    // }

    // static get propTypes() {
    //     return {
    //         nombre: PropTypes.string.isRequired
    //     }
    // }

    render() {
        return (
            <div>
                {/* <button type="button" onClick={() => {
                    this.props.nombre = 'OTRO NOMBRE'
                }}>Cambiar Nombre</button> */}
                <p>Me llamo: {this.props.nombre}</p>
            </div>
        )
    }
}

Luke.propTypes = {
    nombre: PropTypes.string.isRequired
}

Luke.defaultProps = {
    nombre: 'Luke'
}

export default Luke;