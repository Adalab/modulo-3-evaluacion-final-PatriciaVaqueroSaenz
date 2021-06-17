const getApiData = () => {
  return (
    fetch("//rickandmortyapi.com/api/character")
      //https:////rickandmortyapi.com/api/character
      //https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json

      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((character) => {
          return {
            id: character.id,
            gender: character.gender,
            image: character.image,
            name: character.name,
            species: character.species,
            origin: character.origin.name,
            status: character.status,
            episode: character.episode,
          };
        });
        return cleanData;
      })
  );
};

export default getApiData;
