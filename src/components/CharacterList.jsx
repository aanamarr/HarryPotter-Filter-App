//Componente que muestra el listado de personajes.
import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';
import NameFilter from './HouseFilter';


function CharacterList({characters, nameFilter}) {
    if (characters.length === 0) {
        return <p className="character-list">No hay ningún personaje que coincida con "{nameFilter}" 🏰👨‍🏫🪄⚗️🐍.</p>;
    }

    return(
        <div className="character-list">
            {characters.map(character => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default CharacterList;