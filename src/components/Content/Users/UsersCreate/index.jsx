import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../../../features/users/usersSlice";
import CreatedUsers from "../CreatedUsers.js";

import "./styles.css";

const UsersCreate = () => {
  const { createdUsers } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const handleCreate = (event) => {
    event.preventDefault();
    dispatch(
      createNewUser({
        name: event.target.name.value,
        job: event.target.job.value,
      })
    );
  };
  // useEffect;
  return (
    <div className="users_create">
      <form action="#" onSubmit={handleCreate}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            placeholder="Type here..."
            required
          />
        </label>
        <br />
        <br />
        <label>
          Job
          <br />
          <input
            type="text"
            name="job"
            placeholder="Type here..."
            required
          />
        </label>
        <br />
        <br />
        <input className="create_btn" value="Create" type="submit" />
      </form>
      {createdUsers.length > 0 ? (
        <CreatedUsers />
      ) : (
        <h5>Not a single user has been created yet</h5>
      )}
    </div>
  );
};

export default UsersCreate;
