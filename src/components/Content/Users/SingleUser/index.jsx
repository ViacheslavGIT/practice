import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/themeContext";

import "./styles.css";

function SingleUser({ first, last, email, avatar }) {
  const context = useContext(ThemeContext);
  console.log("context", context);
  return (
    <div className="single_user">
      <h2>
        {first} {last}
      </h2>
      <h3>{email}</h3>
      <img className="user_avatar" src={avatar} alt="" />
    </div>
  );
}

export default SingleUser;
