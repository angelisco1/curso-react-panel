import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSkill, changeDato } from '../../store/cv/actions';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: ''
        }
        this.changeSkill = this.changeSkill.bind(this);
        this.changeDatos = this.changeDatos.bind(this);
    }

    changeSkill(event) {
        this.setState({
            skill: event.target.value
        })
    }

    changeDatos(event) {
        this.props.changeDato(event.target.name, event.target.value);
    }
    
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" value={this.props.nombre} onChange={this.changeDatos} />
                </div>
                <div>
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" name="apellidos" value={this.props.apellidos} onChange={this.changeDatos} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={this.props.email} onChange={this.changeDatos} />
                </div>
                <div>
                    <label htmlFor="skill">Skill:</label>
                    <input type="text" name="skill" value={this.state.skill} onChange={this.changeSkill} />
                    <button type="button" onClick={() => this.props.sendSkill(this.state.skill)}>Add Skill</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    sendSkill: addSkill,
    changeDato
}

const withProps = connect(null, mapDispatchToProps);

export default withProps(Form);