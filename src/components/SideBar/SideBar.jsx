import React, { useState } from "react";
/* import { TbMovie } from "react-icons/tb"; */
import { GiTrophy } from "react-icons/gi";
import { FaRandom, FaGrinStars } from "react-icons/fa";
import { MdMovieFilter, MdOutlineFiberNew } from "react-icons/md";
import { randomIds } from "../../randomId";
import UpdateIcon from "@mui/icons-material/Update";
import { Link } from "react-router-dom";

import "./SideBar.scss";

const SideBar = ({ handleAnimeTypeClick }) => {
  const [accordionMovie, setAccordionMovie] = useState(true);
  const [accordionAnime, setAccordionAnime] = useState(false);

  const getRandomAnimeId = () => {
    const ids = randomIds.url.map((obj) => obj.id);
    const randomIndex = Math.floor(Math.random() * ids.length);
    return ids[randomIndex];
  };

  const randomAnimeId = getRandomAnimeId();

  const toggleAccordionMovie = () => {
    setAccordionMovie(!accordionMovie);
    setAccordionAnime(true);
  };

  const toggleAccordionAnime = () => {
    setAccordionAnime(!accordionAnime);
    setAccordionMovie(true);
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar__accordion">
          <li>
            <div
              style={!accordionAnime ? { background: "#298eea" } : null}
              onClick={toggleAccordionAnime}
              className="sidebar__accordion-header"
            >
              <FaGrinStars />
              <h2>Anime</h2>
            </div>

            {!accordionAnime && (
              <ul className="sidebar__accordion-list">
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/"
                >
                  <li
                    onClick={() => handleAnimeTypeClick("latest")}
                    className="sidebar__accordion-list__item"
                  >
                    <MdOutlineFiberNew />
                    Latest
                  </li>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/"
                >
                  <li
                    onClick={() => handleAnimeTypeClick("top")}
                    className="sidebar__accordion-list__item"
                  >
                    <GiTrophy />
                    Top
                  </li>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/"
                >
                  <li
                    onClick={() => handleAnimeTypeClick("upcoming")}
                    className="sidebar__accordion-list__item"
                  >
                    <UpdateIcon />
                    Upcoming
                  </li>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/"
                >
                  <li
                    onClick={() => handleAnimeTypeClick("anime-movies")}
                    className="sidebar__accordion-list__item"
                  >
                    <MdMovieFilter />
                    Anime Movies
                  </li>
                </Link>

                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to={`/anime/${randomAnimeId}`}
                >
                  <li
                    onClick={() => handleAnimeTypeClick("random")}
                    className="sidebar__accordion-list__item"
                  >
                    <FaRandom />
                    Random
                  </li>
                </Link>
              </ul>
            )}
          </li>

          {/* <li>
            <div
              style={!accordionMovie ? { background: "#298eea" } : null}
              onClick={toggleAccordionMovie}
              className="sidebar__accordion-header"
            >
              <TbMovie />
              <h2>Movies</h2>
            </div>

            {!accordionMovie && (
              <ul className="sidebar__accordion-list">
                <li className="sidebar__accordion-list__item">
                  <MdOutlineFiberNew />
                  Latest
                </li>

                <li className="sidebar__accordion-list__item">
                  <GiTrophy />
                  Top
                </li>

                <li
                  className="sidebar__accordion-list__item"
                >
                  <UpdateIcon />
                  Upcoming
                </li>

                <li className="sidebar__accordion-list__item">
                  <FaRandom />
                  Random
                </li>
              </ul>
            )}
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
