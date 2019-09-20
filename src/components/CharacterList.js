import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import axios from 'axios';



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      const characterInfo = res.data.results
      console.log(characterInfo);
      setCharacter(characterInfo);
    })
    .catch(err => {
      console.log(err, 'Cant Find Data')
    });
  }, []);

  return (
  
   

    <section className="character-list">
      
      {character.map(item => {
        return (
         
          <CharacterCard 
            key={item.id}
            name={item.name}
            image={item.image}
            species={item.species}
            gender={item.gender}
            location={item.location.name}
          />
        )
      })}
    </section>
  );  
}


