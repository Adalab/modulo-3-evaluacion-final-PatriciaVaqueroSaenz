import React, { useState, useEffect } from 'react';
// components
import CharacterList from './CharacterList';
import logo from '../images/logo.png';
// services
import getApiData from '../services/api';

const App = () => {
  
  // state
  const [characters, setCharacters] = useState([]);
  console.log(characters);
  
  // effects
    useEffect(() => {
      if (characters.length === 0) {
        getApiData().then(charactersData => {
          setCharacters(charactersData);
        });
      }
    }, []);

  // event handlers

  // render

  return (
    <>
    <header className="header">
      <h1 className="title">Rick y Morty</h1>
      <img src={logo} alt="Rick y Morty logo" className="logo"/>
    </header>
    <main>
      <CharacterList characters={characters} />
    </main>
    <footer className="footer">
      Developed by Patricia Vaquero
    </footer>
    </>
  );
};

export default App;
