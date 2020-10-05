import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const a = actors.map(actor=>{
    (<div className='actor'>
      <h3>{actor.name}</h3> 
      <p>{actor.movies}</p>
    </div>)})
  return (
    <div>
      <h1>Actors Page</h1>
      {a}
    </div>
  );
};

export default Actors;
