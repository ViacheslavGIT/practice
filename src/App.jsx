import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { increment } from "./features/counter/counterSlice";
import Tabs from "./components/Tabs";
import Content from "./components/Content";
import { ThemeContext } from "./context/themeContext";

const App = () => {
  const initialValueOfContext = {
    color: "light",
    size: 14,
    font: "comfortaa",
    name: "Ros",
  };

  return (
    <ThemeContext.Provider value={initialValueOfContext}>
      <div className="App">
        <Tabs />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
