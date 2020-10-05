import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor=>(<div className='actor'><b>{actor.name}</b><br/> <i>Movies:</i> {actor.movies}</div>))}
    </div>
  );
};



export default Actors;
