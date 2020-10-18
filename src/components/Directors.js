import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return(
          <div key={index}>
            <h4>Name: {director.name}</h4>
            <ul>
              Movies: 
              {director.movies.map((movie, ind) => <li key={ind}>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
