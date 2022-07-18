import { IPostState, PostAction, PostActionTypes } from "../../types/post.type";

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (
  state = initialState,
  action: PostAction
): IPostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, loading: true, error: null, posts: [] };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, error: null, posts: action.payload };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};
