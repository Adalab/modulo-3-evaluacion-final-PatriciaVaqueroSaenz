import React from 'react';
import Character from './Character';
import photo from '../images/notFound.png'

const CharacterList = props => {
  //si buscamos un personaje que no existe
  if (props.characters.length === 0) {
    return (
      <div className='container-notFound'>
        <h2 className='container-notFound-title'>Holy shit, human!</h2>
        <img className='container-notFound__img' src={photo} alt='character not found' />
        <div className='container-notFound__text'>
          <p>This character doesn't exist.</p>
          <p>Try again with other name.</p>
        </div>
      </div>
    );
  //si el personaje(s) existen los pintamos
  } else {
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
  }
    };

export default CharacterList;
