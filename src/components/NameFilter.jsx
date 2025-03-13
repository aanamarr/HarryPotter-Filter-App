//Componente para el filtro por nombre.
import PropTypes from 'prop-types';

const NameFilter = ({ setNameFilter }) => {
  const handleClick = (event) => event.preventDefault();

  return (
    <form onSubmit={handleClick}>
      <input
        className='input'
        type="text" 
        placeholder="Buscar personaje ⚡🤓🪄🦌" 
        onChange={(ev) => setNameFilter(ev.target.value)}
       
      />
    </form>
  );
};

NameFilter.propTypes = {
  setNameFilter: PropTypes.func.isRequired,
};

export default NameFilter;