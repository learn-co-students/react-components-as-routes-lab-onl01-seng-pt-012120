import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>\
      <Actor actors={actors}/>
    </div>
  );
};

export default Actors;
