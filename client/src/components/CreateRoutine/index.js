import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateRoutine extends React.Component {
    state = {
        created: false,
        name: ''
    }



    render() {
        if (this.state.created){return <Redirect to="/dashboard"></Redirect>}
        return (
            <div>
                    <label for="name">Name:</label>
                    <input name="name" type="text"></input>
                    <label for="startTime">Start Time:</label>
                    <input name="startTime" type="text"></input>
                    <label for="endTime">End Time:</label>
                    <input name="endTime" type="text"></input>
                    <label for="description">Description:</label>
                    <input name="description" type="text"></input>
                    <input type = "submit" ></input>
            </div>
        );
    }
}

export default CreateRoutine