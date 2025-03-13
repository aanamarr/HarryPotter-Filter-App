import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import HouseFilter from './HouseFilter';
import CharacterDetail from './CharacterDetail';
import '../styles/SelectFilter.css';
import Header from "./Header";
import '../styles/App.css';


function App() {
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [filterCharacters, setFilterCharacters] = useState([]);

  //ahora usamos el useEffect para traer los datos de la API

  //filtrar por casa
  useEffect(() => {
    const url = houseFilter === "all" 
    ? "https://hp-api.onrender.com/api/characters" //todos los personajes
    : `https://hp-api.onrender.com/api/characters/house/${houseFilter}`; //filtrar por casa

    fetch(url)
    .then(resp => resp.json())
    .then(data => setCharacters(data));
  }, [houseFilter]);

  //filtrar por nombre
  useEffect(() => {
    setFilterCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );
  }, [nameFilter, characters]);

  return (
    <div className="app">
    <Header/>
    <Routes>
      {/* Home, filtros y lista de personajes */}
      <Route path="/" element={
          <>
            <HouseFilter setHouseFilter={setHouseFilter} setNameFilter={setNameFilter}/>
            <CharacterList characters={filterCharacters} nameFilter={nameFilter} />
          </>
        }/>

      {/* Detalles de los personajes */}
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
    </div>
  );
}

export default App;
