import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/API";

const initialData = {
  data: [],
  status: "idle",
  error: null,
  total_pages: 0,
  page: 1,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (page = 1) => {
    try {
      const response = await axios.get(API_BASE_URL + `posts?page=${page}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialData,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    // cases for Post Create
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPosts = action.payload;
        state.data = [...loadedPosts.data];
        const pageLength = action.payload?.total_pages;
        state.total_pages = Array.apply(null, Array(pageLength)).map(function (
          x,
          i
        ) {
          return i;
        });
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPage, setStatus } = postsSlice.actions;

export default postsSlice.reducer;
