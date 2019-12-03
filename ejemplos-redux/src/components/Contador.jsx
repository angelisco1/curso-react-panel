import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/contador/actions'; 

class Contador extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.resta}>-</button>
                <span>{this.props.cuenta}</span>
                <button type="button" onClick={this.props.suma}>+</button>
                <input type="number" onChange={(event) => this.props.reset(event.target.value)} />
                {/* <input type="number" onChange={this.props.reset(0)} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cuenta: state
    }
}

const mapDispatchToProps = {
    suma: increment,
    resta: decrement,
    reset
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         suma: () => {
//             dispatch(increment())
//         },
//         resta: () => {
//             dispatch(decrement())
//         },
//         reset: (val) => {
//             dispatch(reset(val))
//         }
//     }
// }

const withProps = connect(mapStateToProps, mapDispatchToProps);

export default withProps(Contador);
