import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../features/tabs/tabsSlice";

import "./styles.css";

const Tab = ({ name }) => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((store) => store.tabs);

  return (
    <div
      onClick={() => dispatch(changeTab(name))}
      className={"tab" + `${activeTab === name ? " active" : ""}`}
    >
      {name}
    </div>
  );
};

export default Tab;
