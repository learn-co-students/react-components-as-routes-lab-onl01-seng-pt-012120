import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page</h1>
      
      {directors.map((director,index) => (
          <div key={index}>

      <h3> Name: {director.name}</h3>
        <ul>
          {directors.map((directors,index) => (
                <li key={index}>
                  {directors.movies}

                </li>

           ) )}
          


        </ul>




            </div>



      ))}
    </div>
  );
}

export default Directors
