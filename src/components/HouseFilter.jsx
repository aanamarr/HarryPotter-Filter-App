//Componente para el filtro por casa.
import React from 'react';
import PropTypes from 'prop-types';

const HouseFilter = ({ setHouseFilter, setNameFilter }) => {
  return (
  <div className="filters-container">
    {/* Input para buscar por nombre */}
    <input 
    type="text" 
    placeholder="Buscar personaje ⚡🤓🪄" 
    className="input" 
    onChange={(ev) => setNameFilter(ev.target.value)}
    />

    {/* Select para filtrar por casa */}
    <select 
    className="selects"
    onChange={(ev) => setHouseFilter(ev.target.value)}
    >
      <option value="all">Todas las casas</option>
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
  setNameFilter: Proptypes.func.isRequired
};

export default HouseFilter;