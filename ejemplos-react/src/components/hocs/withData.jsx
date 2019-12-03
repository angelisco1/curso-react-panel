import React from 'react';
import axios from 'axios';
import Loader from './Loader';

const withData = (WrappedCmp, url) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                datos: [],
                cargando: true
            }
        }

        componentDidMount() {
            axios.get(url)
                .then((resp) => {
                    setTimeout(() => {
                        this.setState({
                            datos: resp.data.value,
                            cargando: false
                        })
                    }, 2000)
                })
        }

        render() {
            return (
                <div>
                    {/* <h2>{url}</h2> */}
                    { this.state.cargando ? <Loader /> : <WrappedCmp datos={this.state.datos} />}
                </div>
            )
        }
    }
}

export default withData;