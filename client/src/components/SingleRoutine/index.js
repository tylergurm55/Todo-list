import React from 'react';


const  SingleRoutine = (props) =>  {

const renderRoutines = () => {
  if(props.location.state){
    return props.location.state.routines.map(routine => {
      return (
        <div key={routine.id}>{routine.startTime} - {routine.endTime} : {routine.description}</div>
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