import React from 'react';
import { Route, Link } from 'react-router-dom';

class RoutineMe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: []
        }
    }

    render() {
        return( 
        <div>
            <h1>Hello you're in Routine Me</h1>
        <ol>
            <li>Tom Brady</li>
            <li>LeBron James</li>
            <li>Rihanna</li>
        </ol>
            {/* <h2>{routines.name}</h2> */}
            <Link to='/dashboard/create'>Create New Routine</Link>
        </div>
        )
    }
}


export default RoutineMe