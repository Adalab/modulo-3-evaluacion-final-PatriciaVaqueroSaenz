import React from 'react';
import { Link } from 'react-router-dom';
import human from "../images/human.png";
import alien from "../images/alien.png";
import unknown from "../images/unknown.png";

const Character = props => {

  const getSpecie = () => {
    if (props.character.species === "Human") {
      return human;
    } else if (props.character.species === "Alien") {
      return alien;
    } else {
      return unknown;
    }
  };
  return (
    <Link className='link' to={`/character/${props.character.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <h4 className="card__title">{props.character.name}</h4>
        <p className="card__description">
          <img
              className="card-detail__specie"
              src={getSpecie()}
              alt={props.character.species}
              title={props.character.species}
            />
        </p>
      </article>
      </Link>
  );
};

export default Character;
