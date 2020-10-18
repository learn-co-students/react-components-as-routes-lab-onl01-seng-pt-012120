import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return(
          <div key={index}>
            <h4>Name: {actor.name}</h4>
            <ul>
              Movies:
              {actor.movies.map((movie, ind) => <li key={ind}>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
