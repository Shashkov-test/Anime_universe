import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_ANIME_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_ANIME_HOST,
};

const baseUrl = process.env.REACT_APP_RAPIDAPI_ANIME_URL;

export const apiAnime = createApi({
  reducerPath: "anime",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: animeApiHeaders,
  }),
  tagTypes: ["Anime"],
  endpoints: (builder) => ({
    getLatestAnime: builder.query({
      query: () => `/top/airing`,
      providesTags: ["Anime"],
    }),
    getSingleAnime: builder.query({
      query: (animeId) => `/${animeId}`,
      providesTags: ["Anime"],
    }),
    getTopAnime: builder.query({
      query: () => `/top/all`,
      providesTags: ["Anime"],
    }),
    getUpcomingAnime: builder.query({
      query: () => `/top/upcoming`,
      providesTags: ["Anime"],
    }),
    getAnimeMovies: builder.query({
      query: () => `/top/movie`,
      providesTags: ["Anime"],
    }),
    getMostPopularAnime: builder.query({
      query: () => `/top/bypopularity`,
      providesTags: ["Anime"],
    }),
  }),
});

export const {
  useGetLatestAnimeQuery,
  useGetSingleAnimeQuery,
  useGetTopAnimeQuery,
  useGetAnimeMoviesQuery,
  useGetMostPopularAnimeQuery,
  useGetUpcomingAnimeQuery,
} = apiAnime;
