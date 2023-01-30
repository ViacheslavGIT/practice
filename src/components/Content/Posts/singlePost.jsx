import React, { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

import "../Posts/styles.css";

function SinglePost({ avatar, colorName, value, year }) {
  const context = useContext(ThemeContext);
  return (
    <div className="single_post">
      <span style={{ backgroundColor: avatar }} className="avatar"></span>
      <h2>
        Name: {colorName} {value}
      </h2>
      <h3>Year: {year}</h3>
    </div>
  );
}

export default SinglePost;
