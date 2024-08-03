import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function Card({ imgShape, imgSrc, artiste, detail }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card text-center rounded-2 main-card m-1 p-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={imgSrc}
        className={`${imgShape} img-size shadow card-img-top`}
        alt="Artiste/Album/Radio/Chart/Playlist"
      />

      {/* Show the FontAwesomeIcon only when hovered */}
      <div className={`btn-play ${isHovered ? "show-play" : ""}`}>
        <FontAwesomeIcon icon={faPlayCircle} size="3x" />
      </div>

      <div className="text-start text-white">{artiste}</div>
      <div className="text-start artiste txt-md truncate">{detail} </div>
    </div>
  );
}

export default Card;
