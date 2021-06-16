import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  return (
    <div className="card-detail">
      <Link className="linkGoBack" to="/">Go back</Link>
      <header>
        <h2 className="card-detail__title">{props.character.name}</h2>
      </header>
      <section>
        <img className="card-detail__img" src={props.character.image} alt={props.character.name} />
        <h4 className="card-detail__name">{props.character.name}</h4>
        <ul className="card-detail__info">
          <li>Specie: {props.character.species}</li>
          <li>Planet: {props.character.origin.name}</li>
          <li>Status: {props.character.status}</li>
          {/* <li>Episodes: {props.character.country}</li> */}
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
