//Componente para el filtro por casa.
import React from 'react';
import PropTypes from 'prop-types';

const HouseFilter = ({ setHouseFilter }) => {
  return (
    <select onChange={(e) => setHouseFilter(e.target.value)} className= 'selects'>
      <option value="gryffindor">Gryffindor</option>
      <option value="slytherin">Slytherin</option>
      <option value="ravenclaw">Ravenclaw</option>
      <option value="hufflepuff">Hufflepuff</option>
    </select>
  );
};
HouseFilter.propTypes = {
  setHouseFilter: PropTypes.func.isRequired,
};

export default HouseFilter;