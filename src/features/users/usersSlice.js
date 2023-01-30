import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../utils/API";

const initialData = {
  users: [],
  createdUsers: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  //                        | 'pending' | 'fulfilled' | 'rejected'
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    try {
      const response = await axios.get(API_BASE_URL + "users"); //
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createNewUser = createAsyncThunk(
  "users/addNewUser",
  async (initialUser) => {
    try {
      const response = await axios.post(
        API_BASE_URL + "users",
        initialUser
      );
      return response.data; // it is an action.payload in addCase on fullfiled
    } catch (error) {
      console.error(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    // cases for User Create
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedUsers = action.payload;
        state.users.push(...loadedUsers.data);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.createdUsers.push(action.payload);
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { changeTab } = usersSlice.actions;

export default usersSlice.reducer;
