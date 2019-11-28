import React from 'react';
import Intro from './introduccion/Intro';
import DarthVader from './props-y-estado/DarthVader';
import Formulario from './formularios/Formulario';
import Referencias from './otras-cosas/Referencias';
import CV from './cv/Cv';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Intro /> */}
                {/* <DarthVader /> */}
                {/* <Formulario /> */}
                {/* <Referencias /> */}
                <CV />
            </div>
        )
    }
}

export default App;