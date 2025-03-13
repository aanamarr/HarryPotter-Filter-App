//Componente para el filtro por casa.
import React from 'react';
import PropTypes from 'prop-types';

const HouseFilter = ({ setHouseFilter, setNameFilter }) => {
  return (
  <div className="filters-container">
    {/* Input para buscar por nombre */}
    <input 
    type="text" 
    placeholder="Escribe un nombre... ¡Alohomora!" 
    className="input" 
    onChange={(ev) => setNameFilter(ev.target.value)}
    />

    {/* Select para filtrar por casa */}
    <select 
    className="selects"
    onChange={(ev) => setHouseFilter(ev.target.value)}
    >
      <option value="all">🧙‍♂️ ¿De qué casa eres?</option>
      <option value="gryffindor">🦁 Valiente como un león (Gryffindor)</option>
      <option value="slytherin">🐍 Astuto como una serpiente (Slytherin)</option>
      <option value="ravenclaw">🦅 Inteligente como un águila (Ravenclaw)</option>
      <option value="hufflepuff">🦡 Leal como un tejón (Hufflepuff)</option>
    </select>
  </div>
  );
};

HouseFilter.propTypes = {
  setHouseFilter: PropTypes.func.isRequired,
  setNameFilter: PropTypes.func.isRequired
};

export default HouseFilter;