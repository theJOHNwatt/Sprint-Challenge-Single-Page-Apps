import React, { useState, useEffect, setState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function SearchForm(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [characterList, setCharacterList] = useState([]);
    let changes = 0;

    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character/").then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
        setCharacterList(res.data.results);
      }).catch(e => console.log(e));
    }, [changes]);

  const handleChange = event => {
      setCharacters(characters.filter( item =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
      ;
      console.log(event.target.value);

      if (event.target.value === ""){
        console.log(characterList);
        setCharacters(characterList);
      }
      console.log(characters);


  };
  return (
    <section className="search-form">
      <form>
        <label>
        <h3>Search For Characters</h3>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search by Name"
            
              onChange={event => handleChange(event)}
            />
          </div>
        </label>
      </form>
      <div className="character-list">
      {characters.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />   
          )
      }
      </div>
    </section>
  );
    }