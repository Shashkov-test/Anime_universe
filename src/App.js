import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import {
  Greetings,
  GeneralPage,
  SinglePageAnime,
  Header,
  SideBar,
  SearchMenu,
} from "./components";

const App = () => {
  const [selectedAnimeType, setSelectedAnimeType] = useState(null);
  const [inputTitles, setInputTitles] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState([]);

  const handleAnimeTypeClick = (animeType) => {
    setSelectedAnimeType(animeType);
    setSelectedAnime([]);
  };

  const handleTitlesChange = (titles) => {
    setInputTitles(titles);
  };

  useMemo(() => {
    if (selectedAnimeType === "random") {
      const timeout = setTimeout(() => {
        setSelectedAnimeType(null);
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [selectedAnimeType]);

  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes("/anime/")) {
      setSelectedAnime([]);
    }
  }, [location.pathname]);

  return (
    <>
      <Greetings />

      <Header setSelectedAnimeType={setSelectedAnimeType} />

      <SideBar handleAnimeTypeClick={handleAnimeTypeClick} />

      <Routes>
        <Route path="/" element={<Navigate to="/anime" />} />
        <Route
          path="/anime"
          element={
            <>
              <SearchMenu
                setSelectedAnime={(title) => setSelectedAnime(title)}
                titleList={inputTitles}
              />

              <GeneralPage
                selectedAnimeType={selectedAnimeType}
                selectedAnime={selectedAnime}
                handleTitlesChange={(titles) => handleTitlesChange(titles)}
              />
            </>
          }
        />
        <Route path="/anime/:animeId" element={<SinglePageAnime />} />
      </Routes>
    </>
  );
};

export default App;
