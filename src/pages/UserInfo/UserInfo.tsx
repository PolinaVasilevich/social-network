import { Avatar } from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import styles from "./UserInfo.module.scss";

export const UserInfo: FC = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className={styles.root}>
      <Avatar className={styles.avatar} src={user.avatar} alt="user-avatar" />
      <div className={styles.userDetails}>
        <span>Username: {user.username}</span>
      </div>
    </div>
  );
};
