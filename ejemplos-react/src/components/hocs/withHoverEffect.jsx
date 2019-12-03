import React from 'react';

const withHoverEffect = (WrappedCmp) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                aplicarEstilos: false
            }
            this.aplicarEstilos = this.aplicarEstilos.bind(this);
            this.quitarEstilos = this.quitarEstilos.bind(this);
        }

        aplicarEstilos() {
            console.log('Pasa 1')
            this.setState({
                aplicarEstilos: true
            })
        }

        quitarEstilos() {
            console.log('Pasa 2')
            this.setState({
                aplicarEstilos: false
            })
        }

        render() {
            const styles = this.state.aplicarEstilos ? {border: '5px solid yellowgreen'} : {}
            console.log(styles)
            return (
                <div onMouseOver={this.aplicarEstilos} onMouseOut={this.quitarEstilos} style={styles}>
                    <WrappedCmp {...this.props} />
                </div>
            )
        }
    }
}

export default withHoverEffect;