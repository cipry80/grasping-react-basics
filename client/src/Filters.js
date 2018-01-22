import React from 'react';

const Filters = ({ currentFilter, onChangeFilterHandler }) => (
  <div className="filters u-fx u-fx-justify-center u-mb-double">
    <span className="u-mr-half">Change filters:</span>
    <select onChange={onChangeFilterHandler} value={currentFilter}>
      <option value="ALL">All</option>
      <option value="ADOPTED">Adopted</option>
      <option value="NOT_ADOPTED">Not Adopted</option>
    </select>
  </div>
);

export default Filters;
