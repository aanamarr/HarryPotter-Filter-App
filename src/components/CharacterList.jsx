//Componente que muestra el listado de personajes.
import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../styles/CharacterList.css';


function CharacterList({characters}) {
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default CharacterList;