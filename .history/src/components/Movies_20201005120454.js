import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {console.log(movies)}
        {movies.map(movie=>(<div className='movie'>{movie.name} Movies: {movie.movies}</div>))}
    </div>
  );
};

export default Movies;
