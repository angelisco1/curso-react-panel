import React, { Component } from 'react'
import ApiICNDB from './ApiICNDB'
import withData from "./withData";
import ListaDatos from './ListaDatos';
import withHoverEffect from './withHoverEffect';

export default class Hocs extends Component {
    render() {

        const ListaDatosHovered = withHoverEffect(ListaDatos);
        const NewListaDatos = withData(ListaDatosHovered, 'http://api.icndb.com/jokes/random/5');
        // const NewListaDatosHovered = withHoverEffect(() =>(<button>Un botón</button>));
        
        return (
            <div>
                {/* <ApiICNDB /> */}
                <NewListaDatos />
                {/* <NewListaDatosHovered /> */}
            </div>
        )
    }
}
