import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// components
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import CharacterDetail from "./CharacterDetail";
// services
import getApiData from "../services/api";
import ls from "../services/localStorage";
import CharacterNotFound from "./CharacterNotFound";

const App = () => {
  // state
  const [characters, setCharacters] = useState(ls.get("users", []));
  console.log(characters);
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));

  // effects
  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  // render
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const renderCharacterDetail = props => {
    
    const routeCharId = parseInt(props.match.params.charId);
    const foundCharacter = characters.find(character => {
      return character.id === routeCharId;
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <CharacterNotFound/>;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <main>
            <Filters filterName={filterName} handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>
        <Route path="/character/:charId" render={renderCharacterDetail} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
