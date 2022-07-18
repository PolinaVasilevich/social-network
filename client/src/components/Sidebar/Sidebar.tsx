import React, { FC } from "react";

import { List, ListItem, ListItemIcon, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <Paper className={styles.root}>
      <div className={styles.inner}>
        <List>
          <span className={styles.label}>Start</span>
          <ListItem>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            Dashboard
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            Messages
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <BookmarksIcon />
            </ListItemIcon>
            Bookmarks
          </ListItem>
        </List>

        <List>
          <span className={styles.label}>Account</span>
          <ListItem>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            Dashboard
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            Messages
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <BookmarksIcon />
            </ListItemIcon>
            Bookmarks
          </ListItem>
        </List>
      </div>
    </Paper>
  );
};

export default Sidebar;
