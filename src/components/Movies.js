import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => {
          return(
            <div key={index}>
              <h3>Title: {movie.title}</h3>
              <h5>Time length: {movie.time} mins</h5>
              <ul>
                Genre: 
                {movie.genres.map((genre, ind) => <li key={ind}>{genre}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
