import React, { FC, useState } from "react";

import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import routeNames from "../../router/routeNames";

import styles from "./Registration.module.scss";
import { IUser } from "../../types";
import { useDispatch } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/auth/action-creators";

export const Registration: FC = () => {
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    console.log(isValid);
    console.log(values);

    if (isValid) {
      const newUser = {
        ...values,
        avatar,
      };
      dispatch(AuthActionCreator.registerUser(newUser));
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isAuth", JSON.stringify(true));
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
          <>
            <input
              id="button-upload-avatar"
              type="file"
              style={{ display: "none" }}
              onChange={uploadAvatar}
            />
            <label htmlFor="button-upload-avatar">
              {avatar ? (
                <img src={avatar} className={styles.img} alt="avatar" />
              ) : (
                <Avatar sx={{ width: 150, height: 150 }} />
              )}
            </label>
          </>
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
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Register
        </Button>
      </form>
    </Paper>
  );
};
