//Componente que muestra el detalle de un personaje.
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CharacterDetail.css';


const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then(response => response.json())
      .then(data => setCharacter(data.find(c => c.name.trim().toLowerCase() === id.trim().toLowerCase())));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-detail">
      <img 
        src={character.image || 'https://dummyimage.com/210x295/000/fff&text=No-image-Harry-Potter'} 
        alt={character.name} 
      />
      <h2>{character.name}</h2>
      <p>House: {character.house}</p>
      <p>Status: {character.alive ? 'Alive' : 'Deceased'}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      {character.alternate_names.length > 0 && (
        <p>Alternate Names: {character.alternate_names.join(', ')}</p>
      )}
    </div>
  );
};

export default CharacterDetail;