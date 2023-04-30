import React, { useState, useEffect } from "react";
import AnimeList from "../AnimeList/AnimeList";
import {
  useGetLatestAnimeQuery,
  useGetTopAnimeQuery,
  useGetAnimeMoviesQuery,
  useGetMostPopularAnimeQuery,
  useGetUpcomingAnimeQuery,
} from "../../../api/apiAnime";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import "./MainAnimeSection.scss";

const MainSection = ({
  selectedAnimeType,
  skip = Boolean,
  handleTitlesChange,
  selectedAnime,
}) => {
  const {
    data: animeList,
    isFetching: isLatestAnimeFetching,
    isLoading: isLatestAnimeLoading,
  } = useGetLatestAnimeQuery(null, {
    skip: selectedAnimeType !== "latest",
  });

  const {
    data: animeTopList,
    isFetching: isTopAnimeFetching,
    isLoading: isTopAnimeLoading,
  } = useGetTopAnimeQuery(null, {
    skip: selectedAnimeType !== "top",
  });

  const {
    data: animeMoviesList,
    isFetching: isAnimeMoviesFetching,
    isLoading: isAnimeMoviesLoading,
  } = useGetAnimeMoviesQuery(null, {
    skip: selectedAnimeType !== "anime-movies",
  });

  const {
    data: mostPopularAnimeList,
    isFetching: isMostPopularAnimeFetching,
    isLoading: isMostPopularAnimeLoading,
  } = useGetMostPopularAnimeQuery();

  const {
    data: upcomingAnimeList,
    isFetching: isUpcomingAnimeFetching,
    isLoading: isUpcomingAnimeLoading,
  } = useGetUpcomingAnimeQuery(null, {
    skip: selectedAnimeType !== "upcoming",
  });

  const [anime, setAnime] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedAnimeType === "top") {
      setAnime(animeTopList);
      handleTitlesChange(animeTopList);
    } else if (selectedAnimeType === "anime-movies") {
      setAnime(animeMoviesList);
      handleTitlesChange(animeMoviesList);
    } else if (selectedAnimeType === "latest") {
      setAnime(animeList);
      handleTitlesChange(animeList);
    } else if (selectedAnimeType === "most-popular") {
      setAnime(mostPopularAnimeList);
      handleTitlesChange(mostPopularAnimeList);
    } else if (selectedAnimeType === "upcoming") {
      setAnime(upcomingAnimeList);
      handleTitlesChange(upcomingAnimeList);
    } else {
      setAnime(mostPopularAnimeList);
      handleTitlesChange(mostPopularAnimeList);
    }
  }, [
    animeList,
    animeTopList,
    animeMoviesList,
    upcomingAnimeList,
    selectedAnimeType,
    mostPopularAnimeList,
    handleTitlesChange,
  ]);

  if (
    isLatestAnimeFetching ||
    isTopAnimeFetching ||
    isAnimeMoviesFetching ||
    isMostPopularAnimeFetching ||
    isLatestAnimeLoading ||
    isTopAnimeLoading ||
    isAnimeMoviesLoading ||
    isMostPopularAnimeLoading ||
    isUpcomingAnimeFetching ||
    isUpcomingAnimeLoading
  )
    return (
      <div className="main">
        <CircularProgress size={70} className="circle" />
      </div>
    );

  /* if (anime?.length === 0) {
    return (
      <div className="main">
        <h2 className="no-movies">Here's no anime... :(</h2>
      </div>
    );
  } else  */ if (selectedAnime && selectedAnime.length > 0) {
    return (
      <div className="main">
        {selectedAnime?.map((item) => {
          return (
            <Link
              key={item.myanimelist_id}
              to={`/anime/${item.myanimelist_id}`}
            >
              <AnimeList
                image={item.picture_url.replace("/r/50x70", "")}
                title={item.title}
                score={item.score}
                aired_on={item.aired_on}
              />
            </Link>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="main">
        {anime?.map((anime) => {
          return (
            <Link
              key={anime?.myanimelist_id}
              to={`/anime/${anime?.myanimelist_id}`}
            >
              <AnimeList
                key={anime?.myanimelist_id}
                image={anime?.picture_url?.replace("/r/50x70", "")}
                title={anime?.title}
                score={anime?.score}
                aired_on={anime?.aired_on}
              />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default MainSection;
