import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home, Auth, NotFound } from "../pages";

const AppRouter: FC = () => {
  const { isAuth } = useSelector((state: any) => state.auth);

  return (
    <Routes>
      {/* <Route path="/" element={isAuth ? <Home /> : <Auth />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
