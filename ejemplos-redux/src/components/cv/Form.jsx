import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: ''
        }
        this.changeSkill = this.changeSkill.bind(this);
        this.sendSkill = this.sendSkill.bind(this);
    }

    changeSkill(event) {
        this.setState({
            skill: event.target.value
        })
    }

    sendSkill() {
        this.props.addSkill(this.state.skill)
        this.setState({
            skill: ''
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" value={this.props.nombre} onChange={this.props.changeState} />
                </div>
                <div>
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" name="apellidos" value={this.props.apellidos} onChange={this.props.changeState} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={this.props.email} onChange={this.props.changeState} />
                </div>
                <div>
                    <label htmlFor="skill">Skill:</label>
                    <input type="text" name="skill" value={this.state.skill} onChange={this.changeSkill} />
                    <button type="button" onClick={this.sendSkill}>Add Skill</button>
                </div>
            </div>
        )
    }
}
