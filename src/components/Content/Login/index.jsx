import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { useGoogleLogin } from "@react-oauth/google";

import "./styles.css";

const Login = () => {
  const context = useContext(UserContext);

  const logIn = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("What Gogle says about me? ", tokenResponse);
      context.saveAccessToken(tokenResponse.access_token);
    },
  });

  return (
    <div className="auth">
      <h2>Token is:</h2>
      <hr />
      <span>{context.token || "Not assigned"}</span>
      <br />
      <hr />
      {context.isLoggedIn ? (
        <button onClick={() => context.logOut()}>Logout</button>
      ) : (
        <button onClick={() => logIn()}>
          Sign in with Google 🚀
        </button>
      )}
    </div>
  );
};

export default Login;
