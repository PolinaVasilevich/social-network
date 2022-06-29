import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import styles from "./Header.module.scss";

import routeNames from "../../router/routeNames";
import logo from "../../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AuthActionCreator } from "../../store/reducers/auth/action-creators";
import { Logout, Settings } from "@mui/icons-material";

const Header: FC = () => {
  const { isAuth, user } = useSelector((state: any) => state.auth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(user);

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
                <Button>
                  <Avatar
                    src={user.avatar}
                    alt="avatar"
                    onClick={handleClick}
                  />
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem className={styles.avatar}>
                      <Avatar src={user.avatar} alt="avatar" />
                      <span>
                        {user.name} {user.surname}
                      </span>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Link to={routeNames.USER_INFO}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={onClickLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
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
