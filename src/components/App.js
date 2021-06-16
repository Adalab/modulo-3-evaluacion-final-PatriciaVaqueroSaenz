import React, { useState, useEffect } from 'react';
// components
import CharacterList from './CharacterList';
import logo from '../images/logo.png';
// services
import getApiData from '../services/api';
import ls from '../services/localStorage';



const App = () => {
  
  // state
  const [characters, setCharacters] = useState(ls.get('users', []));
  console.log(characters);
  const [filterName, setFilterName] = useState(ls.get('filterName', ''));
  
  // effects
    useEffect(() => {
      if (characters.length === 0) {
        getApiData().then(charactersData => {
          setCharacters(charactersData);
        });
      }
    }, []);

    useEffect(() => {
      ls.set('characters', characters);
    }, [characters]);

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
