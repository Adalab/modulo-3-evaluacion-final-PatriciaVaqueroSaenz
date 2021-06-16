import React from "react";
import { Link } from "react-router-dom";
import exit from "../images/exit.png";
import alive from "../images/alive.png";
import dead from "../images/dead.png";
import unknown from "../images/unknown.png";

const CharacterDetail = (props) => {
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
    <div className="card-detail">
      <Link className="linkGoBack" to="/">
        <img className="exitIcon" src={exit} alt="exit" />
      </Link>
      <header>
        <h2 className="card-detail__title">{props.character.name}</h2>
      </header>
      <section className="card-detail__content">
        <img
          className="card-detail__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <ul className="card-detail__info">
          <li>
            Status:
            <img
              className="card-detail__status"
              src={getStatus()}
              alt={props.character.status}
              title={props.character.status}
            />
          </li>
          <li>Specie: {props.character.species}</li>
          <li>Origin: {props.character.origin}</li>
          <li>Episodes: {props.character.episode.length}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
