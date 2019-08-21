import React from 'react';
import Axios from 'axios';
import './CreateRoutine.css';
import { Redirect } from 'react-router-dom';

class CreateRoutine extends React.Component {
    state = {
        created: false,
        name: ''
    }



    render() {
        if (this.state.created){return <Redirect to="/dashboard"></Redirect>}
        return (
            <div className="routines">
                    <h1>Create Your Routine:</h1>
                    <label for="name">Name:</label>
                    <input name="name" type="text"></input>
                    <label for="startTime">Morning Goals:</label>
                    <input name="startTime" type="text"></input>
                    <label for="endTime">Afternoon:</label>
                    <input name="endTime" type="text"></input>
                    <label for="description">Evening:</label>
                    <input name="description" type="text"></input>
                <div className="submit"><input type = "submit" ></input></div>
            </div>
        );
    };
}

export default CreateRoutine