import React from "react";
import { useSelector } from "react-redux";
import { UserContextProvider } from "../../context/userContext";

import Login from "./Login";
import Posts from "./Posts";
import Users from "./Users";

const Content = () => {
  const { activeTab } = useSelector((store) => store.tabs);

  const renderContent = (tab) => {
    switch (tab) {
      case "users":
        return <Users />;
        break;
      case "posts":
        return <Posts />;
        break;
      case "login":
        return <Login />;
        break;
      default:
        break;
    }
  };
  return (
    <div className="content">
      <UserContextProvider>
        {renderContent(activeTab)}
        {/* all that is inside any component (custom or built-in) is going to be a children*/}
      </UserContextProvider>
    </div>
  );
};

export default Content;
