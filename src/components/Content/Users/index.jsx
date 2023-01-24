import React from "react";
import UsersCreate from "./UsersCreate";
import UsersList from "./UsersList";

import "./styles.css";

const Users = () => {
  return (
    <div className="users">
      <UsersList />
      <UsersCreate />
    </div>
  );
};

export default Users;
