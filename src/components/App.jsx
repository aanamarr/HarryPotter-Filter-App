import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";



function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("gryffindor");

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
    <Routes>
        <Route path="/" element={
          <>
            <NameFilter setNameFilter={setNameFilter} />
            <HouseFilter setHouseFilter={setHouseFilter} />
            <CharacterList characters={filterCharacters} />
          </>
        } />
        <Route path="/character/:name" element={<CharacterDetail />} />
    </Routes>
  );
};


export default App;
