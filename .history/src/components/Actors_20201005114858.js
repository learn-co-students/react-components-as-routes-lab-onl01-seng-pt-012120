import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  return (
    <div>
    <h1>Actors Page</h1>
     {renderActors}
    </div>
  );
};

renderActors=()=>{
  const aList = actors.map(actor=><div className='actor'>
    {actor.name}
    Movies: {actor.movies}
  </div>)
  // debugger
  console.log(aList)
  return(
    <div>{aList.join('</br>')}</div>
  )
}

export default Actors;
