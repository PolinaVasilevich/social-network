import React, { FC } from "react";

import { Button, IconButton, TextField } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";

import styles from "./PostShare.module.scss";

interface IPostShareProps {
  avatarImg: string;
}

const PostShare: FC<IPostShareProps> = ({ avatarImg }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img className={styles.avatar} src={avatarImg} alt="profile_img" />
        <div className={styles.options}>
          <TextField fullWidth label="What's happening?" />
          <div className={styles.btns}>
            <Button>
              <PhotoIcon />
              Add Photo
            </Button>

            <Button variant="contained">Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
