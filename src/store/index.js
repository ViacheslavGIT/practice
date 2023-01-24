import { configureStore } from "@reduxjs/toolkit";

import tabsReducer from "../features/tabs/tabsSlice";
import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    users: userReducer,
  },
});
