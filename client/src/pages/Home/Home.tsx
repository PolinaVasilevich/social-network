import React, { FC } from "react";

import Post from "../../components/Post/Post";
import useFetch from "../../hooks/useFetch/useFetch";

import { IPost } from "../../types/posts";

export const Home: FC = () => {
  const {
    data: posts,
    error,
    loading,
  } = useFetch({
    url: "/posts",
  });

  const spinner = loading ? <p>Loading...</p> : null;
  const errorMessage = error ? <p>{error}</p> : null;

  return (
    <div>
      {spinner}
      {errorMessage}
      <div>
        {posts.slice(0, 9).map((post: IPost) => (
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};
