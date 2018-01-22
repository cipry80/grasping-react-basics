import React from 'react';
import Puppy from './Puppy';

const PuppiesList = ({ puppies, onClickAdoptHandler, onClickDeleteHandler }) =>
  puppies.map(puppy => (
    <Puppy
      key={puppy.id}
      {...puppy}
      onClickAdoptHandler={onClickAdoptHandler}
      onClickDeleteHandler={onClickDeleteHandler}
    />
  ));

export default PuppiesList;
