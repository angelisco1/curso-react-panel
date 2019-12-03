import React from 'react';
import Contador from './Contador';
import Cv from './cv/Cv';

class HolaMundo extends React.Component {
    render() {
        return (
            <div>
                <Contador />
                <Cv />
            </div>
        )
    }
}

export default HolaMundo;