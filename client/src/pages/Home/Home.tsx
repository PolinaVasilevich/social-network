import { Card } from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

import styles from "./Home.module.scss";

export const Home: FC = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1>RANDOM ENGLISH WORD</h1>
        <Card className={styles["word-card"]}>WORD</Card>
      </div>
    </div>
  );
};
