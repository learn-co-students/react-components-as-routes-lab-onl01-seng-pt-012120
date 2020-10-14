import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(x => <div>Name: {x.name} Movies: <ul>
  {x.movies.map(m => <li>{m}</li>)}</ul></div>)}
    </div>
  );
};

export default Actors;
