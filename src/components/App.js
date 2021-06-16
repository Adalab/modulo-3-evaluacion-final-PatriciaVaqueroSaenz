import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// components
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import Footer from "./Footer";
import CharacterDetail from "./CharacterDetail";
import Reset from "./Reset";
// services
import getApiData from "../services/api";
import ls from "../services/localStorage";
import CharacterNotFound from "./CharacterNotFound";

const App = () => {
  // state
  const [characters, setCharacters] = useState(ls.get("users", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));
  const [filterStatus, setFilterStatus] = useState(ls.get("filterStatus", ""));
  const [isSort, setIsSort] = useState(ls.get("isSort", false));

  const handleReset =()=> {
    setFilterName('');
    setFilterSpecie('');
    setFilterStatus('');
    setIsSort(false);
  }


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

  useEffect(() => {
    ls.set("filterSpecie", filterSpecie);
  }, [filterSpecie]);

  useEffect(() => {
    ls.set("filterStatus", filterStatus);
  }, [filterStatus]);

  useEffect(() => {
    ls.set("isSort", isSort);
  }, [isSort]);

  // event handlers
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      setFilterSpecie(data.value);
    } else if (data.key === "status") {
      setFilterStatus(data.value);
    } else if (data.key === 'sort') {
      setIsSort(data.checked);
    }
  };

  // render
    const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecie === "" ? true : character.species === filterSpecie;
    })
    .filter((character) => {
      return filterStatus === "" ? true : character.status === filterStatus;
    });
    //si está clickado el checkbox ordena alfabéticamente
    if(isSort){
      filteredCharacters.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    };


  const renderCharacterDetail = (props) => {
    const routeCharId = parseInt(props.match.params.charId);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharId;
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <CharacterNotFound />;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <main>
            <Filters
              filterName={filterName}
              filterSpecie={filterSpecie}
              filterStatus={filterStatus}
              isSort={isSort}
              handleFilter={handleFilter}
            />
            <Reset handleReset={handleReset}/>
            <CharacterList characters={filteredCharacters} />
          </main>
        </Route>
        <Route exact path="/character/:charId" render={renderCharacterDetail} />
        <Route>
          <CharacterNotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
