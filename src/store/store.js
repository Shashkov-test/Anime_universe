import { configureStore } from "@reduxjs/toolkit";
import { apiAnime } from "../api/apiAnime";

const store = configureStore({
  reducer: {
    [apiAnime.reducerPath]: apiAnime.reducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(apiAnime.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
