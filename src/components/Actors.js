import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const generateActors = () => {
    return actors.map((actor, idx) => {
      return(
        <div>
          <h2>Name: {actor.name}</h2>
          <p>Movies:</p>
          <ul>
            {generateTitles(actor.movies)}
          </ul>
        </div>
      )
    })
  }

  const generateTitles = (movies) => {
    return movies.map((title, idx) => <li key={idx}>{title}</li>)
  }

  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {generateActors()}
    </React.Fragment>
  );
};

export default Actors;