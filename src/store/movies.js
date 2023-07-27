import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../utils/api";

const state = {
  movieList: {
    page: 1,
    results: JSON.parse(localStorage.getItem("movieList")) || [],
    total_pages: 0,
    total_results: 0,
  },
  genres: [],
  search: [],
  favorite: [],
  upcoming: [],
  selectedGenres: JSON.parse(localStorage.getItem("selectedGenres")) || [],
  loading: false,
};

export const getMovies = createAsyncThunk("getMovies", async ({ page = 1 }) => {
  let url = "discover/movie";
  if (state.selectedGenres.length >= 1) {
    url += `?with_genres=${state.selectedGenres.join(",")}`;
  }
  if (page) {
    url += url.includes("?with_genres") ? `&page=${page}` : `?page=${page}`;
  }
  const getMovies = await axiosConfig.get(url);
  const allMovies = getMovies.data;
  localStorage.setItem("movieList", JSON.stringify([]));
  return allMovies;
});

export const getMovieGenres = createAsyncThunk("getMovieGenres", async () => {
  const getGenres = await axiosConfig.get("genre/movie/list");
  const allGenres = getGenres.data.genres;
  return allGenres;
});

export const getUpcomingMovie = createAsyncThunk("getMovieGenre", async () => {
  const getUpcoming = await axiosConfig.get("movie/upcoming");
  const allUpcomingMoives = getUpcoming.data.genres;
  return allUpcomingMoives;
});

export const getFavorite = createAsyncThunk("getFavorite", async () => {
  const getFavorite = await axiosConfig.get("account/20206023/favorite/movies");
  const allFavorite = getFavorite.data.results;
  return allFavorite;
});

export const searchMovies = createAsyncThunk("searchMovies", async () => {
  const searchForMovies = await axiosConfig.get("search/movie");
  const searchMovieList = searchForMovies.data.results;
  return searchMovieList;
});

export const addFavorite = createAsyncThunk("addFavorite", async ({ id }) => {
  const addFavoriteList = await axiosConfig.post("account/20206023/favorite", {
    movie_id: id,
  });
  const addNewFavorite = addFavoriteList.data.status_message;
  return addNewFavorite;
});

export const movieSlice = createSlice({
  name: "movies",
  initialState: state,
  reducers: {
    updateSelectedGenres(state, action) {
      let updatedGenres = [];
      for (let genre of action.payload) {
        updatedGenres.push(genre.label);
      }
      updatedGenres = new Set(updatedGenres);
      state.selectedGenres = updatedGenres;
      localStorage.setItem(
        "selectedGenres",
        JSON.stringify(Array.from(updatedGenres))
      );
    },
  },
  extraReducers: {
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movieList = {
        page: payload.page,
        results: payload.results,
        total_pages: payload.total_pages,
        total_results: payload.total_results,
      };
      localStorage.setItem("movieList", JSON.stringify(payload.results));
      state.loading = false;
    },

    [getMovies.pending]: (state, { payload }) => {
      state.loading = true;
    },

    [getMovieGenres.fulfilled]: (state, { payload }) => {
      state.genres = payload;
    },

    [getFavorite.fulfilled]: (state, { payload }) => {
      state.favorite = payload;
    },

    [searchMovies.fulfilled]: (state, { payload }) => {
      state.search = payload;
    },

    [getUpcomingMovie.fulfilled]: (state, { payload }) => {
      state.upcoming = payload;
    },
  },
});

const { reducer } = movieSlice;
export const { updateSelectedGenres } = movieSlice.actions;
export default reducer;
