import React from 'react'

let counter = 0;


export const increment = () => {
  counter += 1;
  return counter; 
};

export const decrement = () => {
  counter -= 1;
  return counter; 
};
