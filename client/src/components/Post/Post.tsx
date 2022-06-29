import React, { FC } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { IPost } from "../../types/posts";

import styles from "./Post.module.scss";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = (props) => {
  const { post } = props;

  return (
    <Card sx={{ maxWidth: 500 }} className={styles.root}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
