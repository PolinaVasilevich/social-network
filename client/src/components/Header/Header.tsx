import React, { FC, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

import profileImg from "../../assets/images/avatar.jpeg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Logout, Settings } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action-creators/auth";

const Header = () => {
  const { user } = useTypedSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <p>LOGO</p>
        <ul className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Avatar
            src={profileImg}
            onClick={handleClick}
            className={styles.avatar}
          />
        </ul>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          sx={{
            ".MuiMenuItem-root:focus": {
              backgroundColor: "transparent",
            },
          }}
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
          <MenuItem>
            <Link to={`/user/`} className={styles["menu-link"]}>
              <Avatar src={profileImg} /> My account
            </Link>
          </MenuItem>

          <Divider />

          <MenuItem>
            <Link to={`/user/`} className={styles["menu-link"]}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </Link>
          </MenuItem>
          <MenuItem onClick={() => dispatch<any>(logout())}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
