import React from "react";
import { BsFillStarFill } from "react-icons/bs";

import "./AnimeList.scss";

const AnimeList = ({ image, title, score, aired_on }) => {
  return (
    <div className="latest-movies__item">
      <div className="item-flip">
        <div className="item-inner">
          <img src={`${image}`} alt="Archive" />
        </div>

        <div className="item-details">
          <div className="item-details-inner">
            <h2 className="title">{title}</h2>

            <div className="rating">
              <i>
                <BsFillStarFill />
              </i>
              {score}
            </div>

            <div className="release">Released in {aired_on}</div>

            <div className="watch-btn">
              <span className="play">View</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
