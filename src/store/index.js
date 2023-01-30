import { configureStore } from "@reduxjs/toolkit";

import tabsReducer from "../features/tabs/tabsSlice";
import userReducer from "../features/users/usersSlice";
import postReducer from "../features/posts/postsSlice";
import authReduser from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: authReduser,
    tabs: tabsReducer,
    users: userReducer,
    posts: postReducer,
  },
});
