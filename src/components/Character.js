import React from "react";
import { Link } from "react-router-dom";
import human from "../images/human.png";
import alien from "../images/alien.png";
import alive from "../images/alive.png";
import dead from "../images/dead.png";
import unknown from "../images/unknown.png";

const Character = (props) => {
  const getSpecie = () => {
    if (props.character.species === "Human") {
      return human;
    } else if (props.character.species === "Alien") {
      return alien;
    } else {
      return unknown;
    }
  };
  const getStatus = () => {
    if (props.character.status === "Dead") {
      return dead;
    } else if (props.character.status === "Alive") {
      return alive;
    } else {
      return unknown;
    }
  };
  return (
    <Link className="link" to={`/character/${props.character.id}`}>
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
            className="card-detail__icon"
            src={getSpecie()}
            alt={props.character.species}
            title={props.character.species}
          />
          <img
            className="card-detail__icon"
            src={getStatus()}
            alt={props.character.status}
            title={props.character.status}
          />
        </p>
      </article>
    </Link>
  );
};

export default Character;
