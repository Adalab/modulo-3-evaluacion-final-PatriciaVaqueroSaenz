import React from 'react';
import { Link } from 'react-router-dom';
import exit from '../images/exit.png';

const CharacterDetail = props => {
  return (
    <div className="card-detail">
      <Link className="linkGoBack" to="/"><img className="exitIcon" src={exit} alt="exit" /></Link>
      <header>
        <h2 className="card-detail__title">{props.character.name}</h2>
      </header>
      <section className="card-detail__content">
        <img className="card-detail__img" src={props.character.image} alt={props.character.name} />
        <ul className="card-detail__info">
          <li>Specie: {props.character.species}</li>
          <li>Planet: {props.character.origin}</li>
          <li>Status: {props.character.status}</li>
          {/* <li>Episodes: {props.character.country}</li> */}
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
