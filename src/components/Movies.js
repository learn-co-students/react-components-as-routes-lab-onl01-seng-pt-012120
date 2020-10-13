import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const generateGenres = genres => genres.map((genre, idx) => <li key={idx}>{genre}</li>)

  const generateMovies = () => {
    return movies.map((movie, idx) => {
      return(
        <div key={idx}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {generateGenres(movie.genres)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {generateMovies()}
    </div>
  );
};

export default Movies;