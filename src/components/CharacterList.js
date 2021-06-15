import React from 'react';
import Character from './Character';

const CharacterList = props => {
  const charElements = props.characters.map(character => {
    return (
      <li key={character.id}>
        <Character character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul className="cards">{charElements}</ul>
    </section>
  );
};

export default CharacterList;
