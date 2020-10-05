import React from 'react';
import { actors } from '../data';

const Actors = () => {
  for (const actor of actors) {
    console.log(actor)
  }
  return (
    <div>
    <h1>Actors Page</h1>
    </div>
  );
};

export default Actors;
