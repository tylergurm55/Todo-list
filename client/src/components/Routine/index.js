import React from 'react';
import axios from 'axios';

class Routine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: {}
        }
    }

    render() {
        const {startTime, endTime, description} = this.state.routines
        return (
            <div>
                <h1>{startTime}</h1>
                <h1>{endTime}</h1>
                <h3>{description}</h3>
            </div>
        )
    }

}

export default Routine