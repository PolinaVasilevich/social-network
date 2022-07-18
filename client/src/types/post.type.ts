export interface IPost {
  userId: number | string;
  id: number | string;
  img?: string;
  title: string;
  body: string;
}

///state
export interface IPostState {
  posts: IPost[];
  loading: null | boolean;
  error: null | string;
}

export enum PostActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

//actions
export interface IFetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}

export interface IFetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

export interface IFetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

///type
export type PostAction =
  | IFetchPostsAction
  | IFetchPostsSuccessAction
  | IFetchPostsErrorAction;
