import React, { Component } from 'react'
import Form from './Form';
import Preview from './Preview';
import { connect } from 'react-redux';

class Cv extends Component {
    render() {
        const { nombre, apellidos, email, skills } = this.props;
        
        return (
            <div>
                <Form 
                    nombre={nombre} 
                    apellidos={apellidos}
                    email={email}
                    skills={skills} />
                <Preview 
                    nombreCompleto={nombre + ' ' + apellidos}
                    email={email}
                    skills={skills} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        nombre: state.cv.nombre,
        apellidos: state.cv.apellidos,
        email: state.cv.email,
        skills: state.cv.skills,
    }
}

const withProps = connect(mapStateToProps, {});

export default withProps(Cv);