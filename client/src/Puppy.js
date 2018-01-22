import React from 'react';

const Puppy = ({ id, name, type, adopted, onClickAdoptHandler }) => (
  <li className="puppies-list__item u-pa-double">
    <div className="u-mb-double">
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Adopted: {adopted ? 'True' : 'False'}</p>
    </div>
    <button
      className={`puppies-list__item__adopt-btn u-pa-half ${
        adopted ? 'adopted' : 'not-adopted'
      }`}
      onClick={() => onClickAdoptHandler(id)}
    >
      {adopted ? 'Cancel Adoption' : 'Adopt me!'}
    </button>
  </li>
);

export default Puppy;
