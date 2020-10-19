import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1> Movies Page </h1>
        {movies.map((movie)=>(
          <div>
            <h3>{movie.title}</h3>
             <ul>time: {movie.time}, genres: {movie.genres} </ul>
           
          </div>
        ))}

    </div>
  );
};

export default Movies;
