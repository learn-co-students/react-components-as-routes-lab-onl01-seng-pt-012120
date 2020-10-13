import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const generateDirectors = () => {
    return directors.map((dir, idx) => {
      return(
        <div>
          <h2>Name: {dir.name}</h2>
          <p>Movies:</p>
          {generateTitles(dir.movies)}
        </div>
      )
    })
  }

  const generateTitles = (movies) => {
    return movies.map((title, idx) => <li key={idx}>{title}</li> )
  }

  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {generateDirectors()}
    </React.Fragment>
  );
}

export default Directors