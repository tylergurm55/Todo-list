import React from 'react';
import './SingleRoutine.css';
import {deleteRoutine} from '../../services/apiService';
import { Redirect } from 'react-router-dom';

const  SingleRoutine = (props) =>  {

  const handleDelete = async (id) => {
    await deleteRoutine(id);
    await props.history.push(`/dashboard/routine/${id}`)
  }

const renderRoutines = () => {

  if(props.location.state){
    return props.location.state.routines.map(routine => {
      return (
        <div>
          <div key={routine.id}>{routine.startTime} - {routine.endTime} : {routine.description}
          </div>
          <div>
            <button onClick={()=> props.history.push('/dashboard/routine/:routine_id/update', {routineId: routine.id})}>Update</button>
          </div>
          <br />
          <div>
            <button onClick={() => handleDelete(routine.id)}>Delete</ button>
          </div>
        </div>
      )
    })
  }
}
    return (
      <div>
       {renderRoutines()}
      </div>
    );
  }


export default SingleRoutine;