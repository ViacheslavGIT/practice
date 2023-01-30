import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import Tab from "../Tab";
import "./styles.css";

const Tabs = () => {
  const context = useContext(ThemeContext);
  const tabs = ["users", "posts", "login"];
  return (
    <div
      className={`tabs ${
        context.size > 10 ? "biggerText" : "smallerText"
      }`}
    >
      {tabs.map((tab, index) => (
        <Tab key={tab + index} name={tab} />
      ))}
    </div>
  );
};

export default Tabs;
