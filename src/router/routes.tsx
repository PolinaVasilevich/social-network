import { Home, Login, Registration } from "../pages";
import routeNames from "./routeNames";

export const routes = [
  {
    path: routeNames.HOME,
    element: <Home />,
    auth: false,
  },
  {
    path: routeNames.LOGIN,
    element: <Login />,
    auth: false,
  },
  {
    path: routeNames.REGISTER,
    element: <Registration />,
    auth: false,
  },
];
