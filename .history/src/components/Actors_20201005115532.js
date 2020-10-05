import React from 'react';
import { actors } from '../data';
const renderActors=()=>{
    const aList = actors.map(actor=><div className='actor'>
      {actor.name}
      Movies: {actor.movies}
    </div>)
  // debugger
  // console.log(aList)
      return aList.join('</br>')
  }
const Actors = () => {
  
  return (
    <div>
      <h1>Actors Page</h1>
     {this.renderActors}
    </div>
  );
};



export default Actors;
