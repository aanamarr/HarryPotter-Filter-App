//Componente para el filtro por casa.
import React from 'react';
import PropTypes from 'prop-types';

const HouseFilter = ({ setHouseFilter }) => {
  return (
  <div className="filters-container">
    <input type="text" placeholder="Buscar personaje ⚡🤓🪄" className="input" onChange={(ev) => setNameFilter(ev.target.value)}/>
    <select className="selects">
      <option value="gryffindor">Gryffindor</option>
      <option value="slytherin">Slytherin</option>
      <option value="ravenclaw">Ravenclaw</option>
      <option value="hufflepuff">Hufflepuff</option>
    </select>
  </div>
  );
};
HouseFilter.propTypes = {
  setHouseFilter: PropTypes.func.isRequired,
};

export default HouseFilter;