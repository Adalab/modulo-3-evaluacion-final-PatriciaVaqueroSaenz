import React, { useState, useEffect } from 'react';
// components
import Header from './Header'
import CharacterList from './CharacterList';
import Footer from './Footer';

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
    <Header/>
    <main>
      <CharacterList characters={characters} />
    </main>
    <Footer/>
    </>
  );
};

export default App;
