import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ film }) => {
  return (
    <div className="MovieCard">
      <div className="MovieCard__image-container">
        <img className="MovieCard__play-button" src="/play.png" alt="Play" />
        <img
          className="MovieCard__image"
          src={film.images.image[0].src}
          alt="Movie"
        />
      </div>
      <div className="MovieCard__title">{film.title}</div>
    </div>
  );
};

export default MovieCard;
