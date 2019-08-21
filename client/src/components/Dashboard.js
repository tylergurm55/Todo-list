import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { userInfo } from 'os';
import RoutineMe from './RoutineMe'
import CreateRoutine from './CreateRoutine'
import RoutineList from './RoutineList';
import ShowRoutine from './ShowRoutine';
import SingleRoutine from './SingleRoutine';

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
        <Route exact path="/dashboard/" component={RoutineList} />
        <Route exact path='/dashboard/routine/:id' render={(props)=>
         <SingleRoutine {...props}/>}/>
        <Route exact path="/dashboard/create" component={CreateRoutine} />
        <Route exact path="/dashboard/:id" component={ShowRoutine} />
        </Switch>
        </div>
        )
    }
}


export default Dashboard