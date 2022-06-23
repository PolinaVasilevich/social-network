import React, { FC, useState } from "react";

import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import routeNames from "../../router/routeNames";

import styles from "./Registration.module.scss";

type FormData = {
  username: string;
  password: any;
  avatar?: string;
};

export const Registration: FC = () => {
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: FormData) => {
    if (isValid) {
      navigate(routeNames.HOME);
    }
  };

  const uploadAvatar = (e: any) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Create an account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.avatar}>
          {avatar ? (
            <img src={avatar} className={styles.img} alt="avatar" />
          ) : (
            <>
              <input
                id="button-upload-avatar"
                type="file"
                style={{ display: "none" }}
                onChange={uploadAvatar}
              />
              <label htmlFor="button-upload-avatar">
                <Avatar sx={{ width: 100, height: 100 }} />
              </label>
            </>
          )}
        </div>
        <TextField
          {...register("username", { required: "Enter username" })}
          className={styles.field}
          label="Username"
          fullWidth
          error={Boolean(errors.username?.message)}
          helperText={errors.username?.message}
        />
        <TextField
          {...register("password", { required: "Enter password" })}
          className={styles.field}
          label="Password"
          fullWidth
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Register
        </Button>
      </form>
    </Paper>
  );
};
