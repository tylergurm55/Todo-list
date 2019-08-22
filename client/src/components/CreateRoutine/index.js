import React from 'react';
import Axios from 'axios';
import './CreateRoutine.css';
import { Redirect } from 'react-router-dom';
import { createRoutine } from '../../services/apiService'
class CreateRoutine extends React.Component {
    constructor(props) {
        super(props)

        this.props = props
        this.state = {
            created: false,
            name: '',
            userId: props.user.id
        }
    }


  handleChange = (e) => {
    const currentElement = e.target
    const { name, value } = currentElement
    const newState = {};
    newState[name] = value
    this.setState(newState)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { userId, name, startTime, endTime, description } = this.state
    const routine = { userId, name, startTime, endTime, description};

    await createRoutine(routine);

    this.setState({created: true})
  }



    render() {
        if (this.state.created){return <Redirect to="/dashboard"></Redirect>}
        return (
            <div className="routines">
                    <h1>Create Your Routine:</h1>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <label for="startTime">Start Time (am/pm):</label>
                        <input name="startTime" type="text" />
                        <label for="endTime">End Time (am/pm):</label>
                        <input name="endTime" type="text" />
                        <label for="description">Activity:</label>
                        <input name="description" type="text" />
                        <div className="submit"><input type = "submit" /></div> 
                    </form>
            </div>
        );
    };
}

export default CreateRoutine