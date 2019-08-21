import React from 'react';
import { Route, Link } from 'react-router-dom';

class RoutineList extends React.Component {
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
            <li><Link to='/dashboard/:id'>Tom Brady</Link></li>
            <li><Link to='/dashboard/:id'>LeBron James</Link></li>
            <li><Link to='/dashboard/:id'>Rihanna</Link></li>
        </ol>
            {/* <h2>{routines.name}</h2> */}
            <Link to='/dashboard/create'>Create New Routine</Link>
        </div>
        )
    }
}


export default RoutineList