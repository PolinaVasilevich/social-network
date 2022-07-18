import React, { FC } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { IPost } from "../../types/post.type";

import styles from "./Post.module.scss";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  const { img, title, body } = post;

  return (
    <Card className={styles.root}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <CardActions>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <CommentIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Post;
