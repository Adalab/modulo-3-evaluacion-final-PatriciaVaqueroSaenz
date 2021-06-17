import React from "react";
import Character from "./Character";
import CharacterNotFound from "./CharacterNotFound";

const CharacterList = (props) => {
  //si buscamos un personaje que no existe (el array de personajes filtrados que nos llega por props desde App está vacío)
  if (props.characters.length === 0) {
    return <CharacterNotFound />;
    //si el personaje(s) existen los pintamos
  } else {
    const charElements = props.characters.map((character) => {
      return (
        <li key={character.id} className="card-item">
          <Character character={character} />
        </li>
      );
    });

    return (
      <section className="container-cards">
        <ul className="card-list">{charElements}</ul>
      </section>
    );
  }
};

export default CharacterList;
