import React from 'react';

const Character = props => {

  return (
      <article className="card">
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__description">
          {props.character.species}
        </p>
      </article>
  );
};

export default Character;
