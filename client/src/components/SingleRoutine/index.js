import React from 'react';
import './SingleRoutine.css';

const  SingleRoutine = (props) =>  {

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