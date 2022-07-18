import React, { FC } from "react";

import { useFormik } from "formik";
import { TextField } from "@mui/material";

import * as yup from "yup";

import styles from "./LoginForm.module.scss";

export interface ILoginFormValues {
  email: string;
  password: string;
}

interface ILoginFormProps {
  children: React.ReactNode;
  onSubmit: (values: ILoginFormValues) => void;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("This field is required"),
  password: yup.string().required("This fieldis required"),
});

export const LoginForm: FC<ILoginFormProps> = ({ children, onSubmit }) => {
  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        className={styles.field}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        className={styles.field}
      />
      {children}
    </form>
  );
};
