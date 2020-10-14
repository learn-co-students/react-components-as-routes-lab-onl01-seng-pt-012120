import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
  {directors.map(x => <div>Name: {x.name} Movies: <ul>
  {x.movies.map(m => <li>{m}</li>)}</ul></div>)}
    </div>
  );
}

export default Directors
