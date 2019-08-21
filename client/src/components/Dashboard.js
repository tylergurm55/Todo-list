import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { userInfo } from 'os';
import RoutineMe from './RoutineMe'
import CreateRoutine from './CreateRoutine'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: []
        }
    }
    // const {user} = props
    render() {
        return( 
        <div classname="routine">
            {/* <h1>{user.name &&  `Welcome back ${user.name}`}</h1> */}
        <Switch>
        <Route exact path="/dashboard" component={RoutineMe} />
        <Route exact path="/dashboard/create" component={CreateRoutine} />
        </Switch>
        </div>
        )
    }
}


export default Dashboard