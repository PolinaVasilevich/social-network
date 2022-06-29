import React, { FC } from "react";
import { useSelector } from "react-redux";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

import styles from "./UserInfo.module.scss";

export const UserInfo: FC = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className={styles.root}>
      <h2>Settings</h2>
      <Card>
        <CardHeader title="My Account" />
        <Divider />
        <CardContent className={styles.content}>
          <Avatar
            className={styles.avatar}
            src={user.avatar}
            variant="square"
            alt="user-avatar"
          />
          <div className={styles.userDetails}>
            <form>
              <div className={styles.fullname}>
                <TextField className={styles.field} label="Name" fullWidth />
                <TextField className={styles.field} label="Surname" fullWidth />
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
