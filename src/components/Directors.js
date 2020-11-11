import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {/* //should render a <div /> for each director */}
      {directors.map((director, index) => (
        <div key={index}>
          <h4>{ director.name }</h4>

          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
        )
       )
      }
    </div>
  );
}

export default Directors
