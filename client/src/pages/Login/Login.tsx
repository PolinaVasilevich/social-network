import React, { FC } from "react";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import routeNames from "../../router/routeNames";
import { ILoginUser } from "../../types/auth.type";
import { useDispatch } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/auth/action-creators";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginUser>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: ILoginUser) => {
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
          {...register("email")}
          type="email"
          className={styles.field}
          label="Email"
          fullWidth
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("password")}
          className={styles.field}
          label="Password"
          fullWidth
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};
