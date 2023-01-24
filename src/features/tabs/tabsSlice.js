import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  activeTab: "users",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialData,
  reducers: {
    changeTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { changeTab } = tabsSlice.actions;

export default tabsSlice.reducer;
