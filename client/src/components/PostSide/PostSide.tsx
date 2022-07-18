import React, { FC } from "react";
import { useSelector } from "react-redux";
import PostShare from "../PostShare/PostShare";
import userAvatar from "../../assets/images/app_icon.png";
import Posts from "../Posts/Posts";

const PostSide: FC = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div>
      <PostShare avatarImg={user.avatar || userAvatar} />
      <Posts />
    </div>
  );
};

export default PostSide;
