import React, { FC, useState } from "react";

import { Button } from "@mui/material";
import { LoginForm, RegisterForm } from "../../components/Forms/";

import styles from "./Auth.module.scss";

import { logIn, signUp } from "../../store/action-creators/auth";

export const Auth: FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const element = (
    <div className={styles["btn-container"]}>
      <a
        className={styles.link}
        href="#"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp
          ? "Already have an account? Login"
          : "Don't have an account? Sign up"}
      </a>

      <Button color="primary" variant="contained" type="submit">
        {isSignUp ? "Register" : "Login"}
      </Button>
    </div>
  );

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>SOCIAL MEDIA</h1>
          <span>Explore the ideas throughout the world</span>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h3 className={styles.title}>{isSignUp ? "Register" : "Login"}</h3>
            {isSignUp ? (
              <RegisterForm onSubmit={(values) => signUp(values)}>
                {element}
              </RegisterForm>
            ) : (
              <LoginForm onSubmit={(values) => logIn(values)}>
                {element}
              </LoginForm>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
