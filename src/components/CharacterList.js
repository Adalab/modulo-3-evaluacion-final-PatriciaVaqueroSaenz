import React from 'react';
import Character from './Character';

const CharacterList = props => {
  const charElements = props.characters.map(character => {
    return (
      <li key={character.id} className='card-item'>
        <Character character={character} />
      </li>
    );
  });

  return (
    <section className='container-cards'>
      <ul className="card-list">{charElements}</ul>
    </section>
  );
};

export default CharacterList;
