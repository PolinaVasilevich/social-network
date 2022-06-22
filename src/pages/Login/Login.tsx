import React, { FC } from "react";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import styles from "./Login.module.scss";

export const Login: FC = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Login
      </Typography>
      <TextField className={styles.field} label="Username" fullWidth />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Login
      </Button>
    </Paper>
  );
};