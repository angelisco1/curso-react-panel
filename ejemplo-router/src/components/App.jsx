import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Inicio from './Inicio'
// import NuevoUsuario from './NuevoUsuario'
import Nav from './Nav'
import Error404 from './Error404'
import withLazyLoading from './withLazyLoading';

const NuevoUsuarioLazy = React.lazy(() => import('./NuevoUsuario'))

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logueado: false
        }
    }
    
    render() {
        return (
            <div>
                <Nav />
                <hr/>
                <Switch>
                    <Route path="/usuarios" component={ Inicio } />
                    <Route path="/nuevo-usuario" component={ withLazyLoading(NuevoUsuarioLazy) } />
                    {/* {this.state.logueado ? <Route path="/nuevo-usuario" component={ NuevoUsuario } /> : null} */}
                    <Redirect from="/" exact to="/usuarios" />
                    <Route path="*" component={ Error404 } />
                </Switch>
            </div>
        )
    }
}

export default App;