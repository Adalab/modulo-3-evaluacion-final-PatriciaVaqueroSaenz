import React, { useState, useEffect } from 'react';
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
      <h1 className="title">Rick y Morty</h1>
      
    </>
  );
};

export default App;
