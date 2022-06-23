import React, { FC } from "react";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import routeNames from "../../router/routeNames";
import { IUser } from "../../types";
import { useDispatch } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/auth/action-creators";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IUser>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: IUser) => {
    if (isValid) {
      const user = {
        ...values,
      };
      dispatch(AuthActionCreator.loginUser(user));
      navigate(routeNames.HOME);
    }
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Login
        </Button>
      </form>
    </Paper>
  );
};
