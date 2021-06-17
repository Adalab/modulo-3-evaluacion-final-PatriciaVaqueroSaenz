import React from "react";
import photo from "../images/notFound.png";

const CharacterNotFound = () => {
  return (
    <div className="container-notFound">
      <h2 className="container-notFound-title">Holy shit, human!</h2>
      <img
        className="container-notFound__img"
        src={photo}
        alt="character not found"
      />
      <div className="container-notFound__text">
        <p>This character doesn't exist.</p>
      </div>
    </div>
  );
};

export default CharacterNotFound;
