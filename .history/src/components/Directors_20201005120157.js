import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {directors.map(director=>(<div className='director'>{director.name} Movies: {director.movies}</div>))}
    </div>
  );
}

export default Directors
