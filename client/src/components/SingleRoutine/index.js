import React from 'react';


const  SingleRoutine = (props) =>  {
console.log(props)
    return (
      <div>
       <p> {props.icecream.flavor} </p>
      </div>
    );
  }


export default IceCreamSingle;