import { IMovie } from "./../type/type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "src/api/axios";
import { IGetMoviesRequest } from "src/features/HomePage/type/type";

export const getMovies = createAsyncThunk(
  "getMovies",
  async ({ page, limit, quality, query }: IGetMoviesRequest) => {
    const response = await axiosInstance.get(
      `/list_movies.json?page=${page}&limit=${limit}&quality=${quality}`
    );
    return response.data;
  }
);

export const searchMovies = createAsyncThunk(
  "searchMovies",
  async (query: string) => {
    const response = await axiosInstance.get(
      `/list_movies.json?query_term=${query}`
    );
    return response.data;
  }
);

const initialState = {
  movieList: [] as IMovie[],
  open: false,
  currentMovie: {} as IMovie,
  isLoading: false,
  isShowing: false,
};

export const homePageSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload;
    },
    setIsShowing: (state, action) => {
      state.isShowing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movieList = [...state.movieList, ...action.payload.data.movies];
        state.isLoading = false;
      })
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.movieList = action.payload.data.movies;
        state.isLoading = false;
      });
  },
});

export const { setOpen, setCurrentMovie, setIsShowing } = homePageSlice.actions;

export default homePageSlice.reducer;
