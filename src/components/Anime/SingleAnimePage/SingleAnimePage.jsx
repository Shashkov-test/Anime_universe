import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleAnimeQuery } from "../../../api/apiAnime";
import { FaTrophy } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet";

import "./SingleAnimePage.scss";

const SingleAnimePage = () => {
  const { animeId } = useParams();
  const { data, isFetching, isLoading } = useGetSingleAnimeQuery(animeId);

  const genres = data?.information?.genres?.map((item) => item.name);
  const genresString = genres?.join(" | ");

  if (isFetching || isLoading)
    return <CircularProgress size={70} className="single-circle" />;
  return (
    <>
      <Helmet>
        <meta
          name={data?.title_ov}
          content={`Information about ${data?.title_ov}`}
        />
        <title>{data?.title_ov}</title>
      </Helmet>

      {data?.picture_url && data?.title_ov ? (
        <div className="single-anime">
          <div className="container">
            <div className="single-anime__image">
              <div className="single-anime__info-rank">
                <i>
                  <FaTrophy />
                </i>
                Top {data?.statistics?.ranked} by popularity
              </div>
              <img src={data?.picture_url} alt={data?.title_ov} />
            </div>

            <div className="single-anime__info">
              <div className="single-anime__info-first">
                <div className="single-anime__info-score">
                  <i>
                    <BsFillStarFill />
                  </i>

                  <span>{data?.statistics?.score}</span>
                </div>
                <div className="single-anime__info-names">
                  <div className="single-anime__info-title">
                    {data?.title_ov}
                  </div>

                  <div className="single-anime__info-alternative">
                    {data?.alternative_titles?.japanese}
                  </div>
                </div>
              </div>

              <div className="devider"></div>

              <div className="single-anime__info-information">
                <div className="one">
                  <b>Rating: </b>
                  {data?.information?.rating}
                </div>
                <br />
                <div className="two">
                  <b>Released in:</b> {data?.information?.aired}
                </div>
                <br />
                <div className="three">
                  <b>Duration:</b> {data?.information?.duration}
                </div>
              </div>

              <div className="devider"></div>

              <div className="single-anime__info-genres">
                <div>
                  <b>Genres:</b> {genresString}
                </div>

                <span>
                  <b>Episodes:</b> {data?.information?.episodes}
                </span>
                <br />
                {data.information.studios.name && (
                  <div className="studio">
                    <b>Studio: </b>
                    {data?.information?.studios?.map((item) => item.name)}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="single-anime__descr">{data?.synopsis}</div>

          <div className="characters-actors">
            <div className="characters">
              {data?.characters?.map((character) => (
                <div key={character.name} className="character">
                  <a href={character.myanimelist_url}>
                    <img
                      src={character.picture_url.replace("/r/42x62", "")}
                      alt={character.name}
                    />
                    <div className="characters-name">{character.name}</div>
                  </a>
                </div>
              ))}
            </div>

            <div className="actors">
              {data?.characters?.map((character) => (
                <div key={character.name} className="actor">
                  <a href={character.voice_actor_myanimelist_url}>
                    <img
                      src={character.voice_actor_picture_url.replace(
                        "/r/42x62",
                        ""
                      )}
                      alt={character.voice_actor_name}
                    />

                    <div className="actors-name">
                      {character.voice_actor_name}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="back">
            <div>GO BACK</div>
          </Link>
        </div>
      ) : (
        <div className="no-info">
          <span>
            Something went wrong. <br />
            Unfortunately, information about this anime is not available.
          </span>

          <Link to="/" className="back">
            <div>GO BACK</div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleAnimePage;
