import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/API";

const initialData = {
  error: "",
  isAuthorized: false,
  loading: false,
  token: "",
};

export const loginUser = createAsyncThunk(
  "login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_BASE_URL + `login`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialData,
  reducers: {
    clearStore: () => initialData,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthorized = true;
        state.loading = false;
        state.error = "";
      })
      .addCase(loginUser.pending, (state) => {
        state.token = "";
        state.isAuthorized = false;
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.token = "";
        state.isAuthorized = false;
        state.loading = false;
      });
  },
});

export const { clearStore } = authorizationSlice.actions;

export default authorizationSlice.reducer;
