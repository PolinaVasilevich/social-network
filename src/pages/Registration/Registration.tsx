import React, { FC } from "react";

import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import styles from "./Registration.module.scss";

export const Registration: FC = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Create an account
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Username" fullWidth />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Register
      </Button>
    </Paper>
  );
};
