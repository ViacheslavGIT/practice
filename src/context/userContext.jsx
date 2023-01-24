import React, { createContext, useState } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { google, googleLogOut } from "../utils/auth";

export const UserContext = createContext(null);

console.log("userContext =", UserContext);

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const logOut = async () => {
    googleLogOut();
    setIsLoggedIn(false);
    setToken("");
  };

  const saveAccessToken = (token) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const changeUserDetails = async (newName, newPassword) => {
    setUserName(newName);
    setPassword(newPassword);
  };

  const contextValues = {
    userName,
    userPassword,
    isLoggedIn,
    token,
    logOut,
    changeUserDetails,
    saveAccessToken,
  };

  return (
    <UserContext.Provider value={contextValues}>
      <GoogleOAuthProvider clientId={google.key}>
        {children}
      </GoogleOAuthProvider>
    </UserContext.Provider>
  );
};
