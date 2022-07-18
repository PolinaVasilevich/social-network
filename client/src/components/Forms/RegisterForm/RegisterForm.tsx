import React, { FC, useState } from "react";

import styles from "./RegisterForm.module.scss";

import * as yup from "yup";
import { TextField } from "@mui/material";
import { useFormik } from "formik";

export interface IRegisterFormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpass: string;
}

interface IRegisterFormProps {
  children: React.ReactNode;
  onSubmit: (values: IRegisterFormValues) => void;
}

const validationSchema = yup.object({
  firstname: yup.string().required("This field is required"),
  lastname: yup.string().required("This fieldis required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("This field is required"),
  password: yup.string().required("This fieldis required"),
  confirmpass: yup
    .string()
    .required("This fieldis required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export const RegisterForm: FC<IRegisterFormProps> = ({
  children,
  onSubmit,
}) => {
  const initialValues: IRegisterFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.container}>
        <TextField
          name="firstname"
          label="First Name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
          className={styles.field}
        />
        <TextField
          name="lastname"
          label="Last Name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
          className={styles.field}
        />
      </div>
      <TextField
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        className={styles.email}
      />
      <div className={styles.container}>
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          className={styles.field}
        />
        <TextField
          name="confirmpass"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmpass}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmpass && Boolean(formik.errors.confirmpass)
          }
          helperText={formik.touched.confirmpass && formik.errors.confirmpass}
          className={styles.field}
        />
      </div>
      {children}
    </form>
  );
};
