import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import NameFilter from './NameFilter';
import HouseFilter from './HouseFilter';
import CharacterDetail from './CharacterDetail';
import Header from "./Header";


function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("gryffindor");
  const [nameFilter, setNameFilter] = useState("");

  //ahora usamos el useEffect para traer los datos de la API

  //filtrar por casa
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${houseFilter}`)
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
    <>
    <Header/>
    <Routes>
      <Route path="/" element={
          <>
            <NameFilter setNameFilter={setNameFilter} />
            <HouseFilter setHouseFilter={setHouseFilter} />
            <CharacterList characters={filterCharacters} />
          </>
        }
      />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
    </>
  );
}

export default App;
