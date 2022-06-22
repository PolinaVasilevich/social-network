import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";
import { routes } from "../router/routes";

const AppRouter: FC = () => {
  const isAuth = false;

  return (
    <Routes>
      {routes.map(({ path, element, auth }) => {
        if (auth && !isAuth) {
          return false;
        }

        return <Route path={path} element={element} key={path} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
