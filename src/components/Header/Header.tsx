import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import { Button } from "@mui/material";

import styles from "./Header.module.scss";

import routeNames from "../../router/routeNames";
import logo from "../../assets/images/logo.svg";

const Header: FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const onClickLogout = () => setIsAuth(false);

  return (
    <header className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link to={routeNames.HOME}>
              <img src={logo} width="50px" height="50px" alt="logo" />
            </Link>
          </div>
          <div className={styles.buttons}>
            {!isAuth ? (
              <>
                <Link to={routeNames.LOGIN}>
                  <Button variant="outlined">Login</Button>
                </Link>
                <Link to={routeNames.REGISTER}>
                  <Button variant="contained">Sign up</Button>
                </Link>
              </>
            ) : (
              <>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
