import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(x => <div>Title: {x.title} Time: {x.time} Genres:
        <ul>{x.genres.map(g => <li>{g}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
