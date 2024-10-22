import React from 'react';

const FilterOptions = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="filter-options">
      <h3>Filter Options</h3>
      <div>
        <label>Min Temp:</label>
        <input name="minTemp" type="number" onChange={handleFilterChange} />
      </div>
      <div>
        <label>Max Temp:</label>
        <input name="maxTemp" type="number" onChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default FilterOptions;