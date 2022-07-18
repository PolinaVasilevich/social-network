import { Dispatch } from "redux";
import { PostAction, PostActionTypes } from "../../types/post.type";

import * as PostsApi from "../../api/PostRequests";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    dispatch({ type: PostActionTypes.FETCH_POSTS });
    try {
      const { data } = await PostsApi.getPosts();

      dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POSTS_ERROR,
        payload: "An error occurred while loading",
      });
    }
  };
};
