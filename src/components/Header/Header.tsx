import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import { Avatar, Button } from "@mui/material";

import styles from "./Header.module.scss";

import routeNames from "../../router/routeNames";
import logo from "../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/auth/action-creators";

const Header: FC = () => {
  const { isAuth, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(AuthActionCreator.logout());
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
  };

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
                <Link to={routeNames.USER_INFO}>
                  <Avatar src={user.avatar} alt="avatar" />
                </Link>
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
