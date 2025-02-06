//Componente para el filtro por nombre.
import React from 'react';

const NameFilter = ({ setNameFilter }) => {
  return (
    <input 
      type="text" 
      placeholder="Search by name" 
      onChange={(e) => setNameFilter(e.target.value)} 
    />
  );
};

export default NameFilter;