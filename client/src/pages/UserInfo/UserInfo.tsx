import React, { FC } from "react";
import { useSelector } from "react-redux";

import styles from "./UserInfo.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

export const UserInfo: FC = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className={styles.root}>
      <Sidebar />
    </div>
  );
};
