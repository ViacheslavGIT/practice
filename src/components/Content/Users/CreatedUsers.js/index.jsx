import React from "react";
import { useSelector } from "react-redux";

const CreatedUsers = () => {
  const { createdUsers } = useSelector((store) => store.users);
  return (
    <div>
      {createdUsers.map((user) => (
        <h5 key={user.id}>
          {user.name} work as a {user.job} from{" "}
          {new Date(user.createdAt).toISOString().split("T")[0]}
        </h5>
      ))}
    </div>
  );
};

export default CreatedUsers;
