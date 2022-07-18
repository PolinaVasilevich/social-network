import { Button } from "@mui/material";
import React, { FC } from "react";
import { IUser } from "../../types/user.type";

import styles from "./ProfileCard.module.scss";

import coverImg from "../../assets/images/1_2732x2048 2.png";
import userAvatar from "../../assets/images/app_icon.png";
import { Link } from "react-router-dom";

interface IProfileCardProps {
  user: IUser;
}

const ProfileCard: FC<IProfileCardProps> = ({ user }) => {
  const { id, firstname, lastname, avatar } = user;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles["profile-imgs"]}>
          <img src={coverImg} alt="cover_img" />
          <img src={userAvatar} alt="avatar" />
        </div>
        <div className={styles.fullname}>
          <span>
            {/* {firstname} {lastname}*/}
            TEST TEST
          </span>
        </div>
        <div></div>
        <Button
          sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <Link
            to={`/profile/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
