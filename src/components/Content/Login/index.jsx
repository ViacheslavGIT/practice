import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";

import { UserContext } from "../../../context/userContext";

import "./styles.css";
import { clearStore, loginUser } from "../../../features/login/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const context = useContext(UserContext);

  const logIn = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      context.saveAccessToken(tokenResponse.access_token);
    },
  });

  const { error, loading, token, isAuthorized } = useSelector((store) => {
    return store.login;
  });

  const isUserLoggedIn = context.isLoggedIn || isAuthorized;

  const validateEmail = (value) => {
    let requiredError;
    if (!value) {
      requiredError = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      requiredError = "Invalid email address";
    }
    return requiredError;
  };
  const validatePassword = (value) => {
    let requiredError;
    if (!value) {
      requiredError = "Required!";
    }
    return requiredError;
  };
  return (
    <div className="auth">
      {!isUserLoggedIn ? (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            const body = {
              email: values.email,
              password: values.password,
            };
            dispatch(loginUser(body));
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@acme.com"
                validate={validateEmail}
              />
              {errors.email && touched.email && (
                <div className="requiredError">{errors.email}</div>
              )}
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="enter password"
                validate={validatePassword}
                type="password"
              />
              {errors.password && touched.password && (
                <div className="requiredError">{errors.password}</div>
              )}
              <button className="button-login" disabled={loading} type="submit">
                {loading ? "...Loading" : "Sing in with email"}
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <button
          className="button-login"
          onClick={() => {
            dispatch(clearStore());
            context.logOut();
          }}
        >
          Logout
        </button>
      )}

      {context.isLoggedIn || isAuthorized ? null : (
        <button className="button-login" onClick={() => logIn()}>
          Sign in with Google 🚀
        </button>
      )}

      <br />
      {context.token || token ? (
        <span className="token-field" style={{ color: "green" }}>
          Token is: {context.token || token}
        </span>
      ) : (
        <span>Not assigned</span>
      )}
      <br />
      {error && !context.isLoggedIn ? (
        <span style={{ color: "red" }}>{error}</span>
      ) : null}
    </div>
  );
};

export default Login;
