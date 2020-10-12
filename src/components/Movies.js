import React from 'react';
import { movies } from '../data';

const Movies = () => {


  
  return (
    <div>
        <h1>Movies Page</h1>
          
          {movies.map((movie,index)=>(
           <div key={index}> 
            <h3> Movie{movie.title} </h3>
            <p>Movie Time {movie.time}</p>
            <p> Genres {movies.genre}</p>

            <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
            

           </div>



          ))}
          
          
           
    </div>
  );
};

export default Movies;
