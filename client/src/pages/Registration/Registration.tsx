import React, { FC, useState } from "react";

import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import routeNames from "../../router/routeNames";

import styles from "./Registration.module.scss";
import { IRegisterUser } from "../../types/auth.type";
import { useDispatch } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/auth/action-creators";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Registration: FC = () => {
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (values: IRegisterUser) => {
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
          {...register("name")}
          className={styles.field}
          label="Name"
          fullWidth
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("surname")}
          className={styles.field}
          label="Surname"
          fullWidth
          error={Boolean(errors.surname?.message)}
          helperText={errors.surname?.message}
        />
        <TextField
          {...register("email")}
          className={styles.field}
          label="Email"
          type="email"
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
          Register
        </Button>
      </form>
    </Paper>
  );
};
