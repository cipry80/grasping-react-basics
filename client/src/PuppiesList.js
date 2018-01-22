import React from 'react';
import Puppy from './Puppy';

const PuppiesList = ({ puppies, onClickAdoptHandler }) =>
  puppies.map(puppy => (
    <Puppy
      key={puppy.id}
      {...puppy}
      onClickAdoptHandler={onClickAdoptHandler}
    />
  ));

export default PuppiesList;
