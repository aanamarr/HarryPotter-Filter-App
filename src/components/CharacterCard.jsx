//Componente para cada tarjeta de personaje.
import React from 'react'
import '../styles/CharacterCard.css'
import harryImage from '../images/noi-mag.png';
import { Link } from 'react-router-dom'

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
        <div className="character-card">
            <img src={character.image || harryImage} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
        </div>
    </Link>
  );
};

export default CharacterCard;