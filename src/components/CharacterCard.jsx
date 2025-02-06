//Componente para cada tarjeta de personaje.
import React from 'react'
import '../styles/CharacterCard.css'
import { Link } from 'react-router-dom'

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
        <div className="character-card">
            <img src={character.name || 'https://dummyimage.com/210x295/000/ff00d0.png&text=no+img'} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
        </div>
    </Link>
  );
};

export default CharacterCard;