import React from 'react';
import { actors } from '../data';

const Actors = () => {
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
  return (
    <div>
    <h1>Actors Page</h1>
     {this.renderActors}
    </div>
  );
};



export default Actors;
