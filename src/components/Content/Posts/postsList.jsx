import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  setPage,
  setStatus,
} from "../../../features/posts/postsSlice";
import SinglePost from "./singlePost";

import "./styles.css";

const PostsList = () => {
  const dispatch = useDispatch();

  const { data, status, page, total_pages } = useSelector(
    (store) => store.posts
  );

  const handlePage = (page) => {
    dispatch(setPage(page));
    dispatch(setStatus("idle"));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts(page));
    }
  }, [dispatch, page]);

  return (
    <div className="posts_list">
      {data &&
        data?.map((post) => {
          return (
            <SinglePost
              key={post.id}
              colorName={post.name}
              year={post.year}
              value={post.panton_value}
              avatar={post.color}
            />
          );
        })}
      <div className="pages-wrapper">
        {total_pages &&
          total_pages?.map((el) => {
            return (
              <span
                className="page-btn"
                key={el}
                onClick={() => handlePage(el + 1)}
                role="button"
                style={{ borderColor: page === el + 1 ? "#50c878" : "black" }}
              >
                {el + 1}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default PostsList;
