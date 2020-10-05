import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const a = actors.map(actor=>{return(<li>{actor.name} {actor.movies}</li>)})
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {a}
      </ul>
    </div>
  );
};

export default Actors;
