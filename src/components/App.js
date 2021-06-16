import React, { useState, useEffect } from 'react';
// components
import Header from './Header';
import Filters from './Filters';
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

    useEffect(() => {
    ls.set('filterName', filterName);
    }, [filterName]);

  // event handlers
  const handleFilter = data => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  };

  // render
  const filteredCharacters = characters
    .filter(character => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    });


  return (
    <>
    <Header/>
    <main>
      <Filters 
      filterName={filterName} 
      handleFilter={handleFilter}
      />
      <CharacterList characters={filteredCharacters} />
    </main>
    <Footer/>
    </>
  );
};

export default App;
