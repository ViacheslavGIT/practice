import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../../features/users/usersSlice";
import SingleUser from "../SingleUser";

import "./styles.css";

const UsersList = () => {
  const { users } = useSelector((store) => store.users);
  const { status } = useSelector((store) => store.users);
  const { error } = useSelector((store) => store.users);

  const dispatch = useDispatch();

  const a = {
    prop: 1,
    nested: {
      name: "Ros",
      age: 28,
    },
  };

  const array = [1, 2, 3, 5];
  const b = { ...a };
  b.nested.name = "Max";

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);
  return (
    <div className="users_list">
      {users.map((user) => {
        return (
          <SingleUser
            key={user.email}
            first={user.first_name}
            email={user.email}
            last={user.last_name}
            avatar={user.avatar}
          />
        );
      })}
    </div>
  );
};

export default UsersList;
