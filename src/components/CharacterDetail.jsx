//Componente que muestra el detalle de un personaje.
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styles/CharacterDetail.css';
import harryImage from '../images/noi-mag.png';

const CharacterDetail = () => {
  const { id } = useParams();//siempre que se use useParams se debe importar de react-router-dom, useParams sirve para obtener los parámetros de la URL, es igual al id que se le pasa en el path de la ruta
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then(response => response.json())
      .then(data => setCharacter(data.find(c => c.id === id)
      ));

  }, [id]);

  if (!character) return <div>Cargando Página⚡🤓🪄🦌...</div>;

  return (
    <>
      <NavLink to="/" className="home-button">⬅ Volver</NavLink>
      <div className="character-detail">
        <img 
          src={character.image || harryImage} 
          alt={character.name} 
        />
        <div className="info">
          <h2>{character.name}</h2>
          <p>House: {character.house}</p>
          <p>Status: {character.alive ? 'Vivo🫀' : 'Muerto💀'}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          {character.alternate_names.length > 0 && (
            <p>Alternate Names: {character.alternate_names.join(', ')}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;