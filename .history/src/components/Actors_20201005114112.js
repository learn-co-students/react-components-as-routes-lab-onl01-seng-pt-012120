import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const aList = actors.map(actor=><div className='actor'>
    {actor.name}
    Movies: {actor.movies}
  </div>)
  return (
    <div>
    <h1>Actors Page</h1>
     {aList.join('</br>')}
    </div>
  );
};

export default Actors;
