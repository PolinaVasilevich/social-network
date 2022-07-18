import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Post from "../Post/Post";

import { fetchPosts } from "../../store/action-creators/post";

const Posts: FC = () => {
  const { posts, loading, error } = useTypedSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchPosts());
  }, []);

  if (loading) {
    return <p>LOADING...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
