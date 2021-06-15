const getApiData = () => {
    return (
      fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
      //https://rickandmortyapi.com/documentation/#get-all-characters
        
        .then(response => response.json())
        .then(data => {
          const cleanData = data.results.map(character => {
            return {
              id: character.id,
              gender: character.gender,
              image: character.image,
              name: character.name,
              species: character.species,
              origin: character.origin.name,
              status: character.status
            };
            
          });
          return cleanData;
          
        })
        
    );
  };
  
  export default getApiData;
  