import React from 'react';
import { Route, Link } from 'react-router-dom';
import { getFamousPerson } from '../../services/apiService';

class RoutineList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            routines:[]
        }
    }

 getFamous = async () => {
     const data = await getFamousPerson()
    //  console.log(data)
     this.setState({data})
     console.log(data)
}
async componentDidMount () {
await this.getFamous()
}

renderPerson= () => {
    if(this.state.data){
        return this.state.data.map(user =>{
            
            return (
                <li key={user.id}><Link to={{
                    pathname:`/dashboard/routine/${user.id}`,
                    state:{routines:user.routines}
            }}>{user.name}</Link></li>
            )
        })
    }
}


    render() {
        return( 
        <div>
            <h1>Hello you're in Routine Me</h1>
        <ol>
            {this.renderPerson()}
            
        </ol>
            {/* <h2>{routines.name}</h2> */}
            <Link to='/dashboard/create'>Create New Routine</Link>
        </div>
        )
    }
}


export default RoutineList
