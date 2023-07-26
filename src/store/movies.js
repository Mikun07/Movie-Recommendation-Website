import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../utils/api";

const state = {
  movieList: {page: 1, results:JSON.parse(localStorage.getItem("movieList")) || [], total_pages: 0, total_results: 0},
  genres: [],
  selectedGenres: JSON.parse(localStorage.getItem("selectedGenres")) || [],
  currentPage: 1
};

export const getMovies = createAsyncThunk("getMovies", async ({page}) => {
  let url = "discover/movie";
  if (state.selectedGenres.length > 1) {
    url += "?with_genres=";
    for (let genre of state.selectedGenres) {
      url += `${genre.name}`;
    }
  }
  if (page) {
    url += `?page=${page}`
  }
  console.log({url});
  const getMovies = await axiosConfig.get(url);
  const allMovies = getMovies.data;
  
  return allMovies;
});

export const getMovieGenres = createAsyncThunk("getMovieGenre", async () => {
  const getGenres = await axiosConfig.get("genre/movie/list");
  const allGenres = getGenres.data.genres;
  return allGenres;
});

export const movieSlice = createSlice({
  name: "movies",
  initialState: state,
  extraReducers: {
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movieList = {
        page: payload.page,
        results: payload.results,
        total_pages: payload.total_pages,
        total_results: payload.total_results
      };
      localStorage.setItem("movieList", JSON.stringify(payload.results))
    },

    [getMovieGenres.fulfilled]: (state, { payload }) => {
      state.genres = payload;
    },
  },
});

const { reducer } = movieSlice;
export default reducer;