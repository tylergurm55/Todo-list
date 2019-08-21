import React from 'react';
import axios from 'axios';

class ShowRoutine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            routines: {}
        }
    }

    componentDidMount = async() => {
        let id = this.props.match.params.id
        let routine = await axios.get(`/dashboard/${id}`)
        console.log(routine)
      }

    render() {
        const {startTime, endTime, description} = this.state.routines
        return (
            <div>
                <h1>Hello</h1>
                <h1>{startTime}</h1>
                <h1>{endTime}</h1>
                <h3>{description}</h3>
            </div>
        )
    }

}

export default ShowRoutine