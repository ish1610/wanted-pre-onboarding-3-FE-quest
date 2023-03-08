import APage from "../../pages/APage";
import BPage from "../../pages/BPage";
import CPage from "../../pages/CPage";
import Home from "../../pages/Home";

import LoginPage from "../../pages/LoginPage";
import { ROUTE, RouterItem } from "../types/route";

export const routerInfo: RouterItem[] = [
  {
    path: ROUTE.Home,
    element: <Home />,
    withAuthorization: false,
    label: "Home",
    layout: true,
  },
  {
    path: ROUTE.PageA,
    element: <APage />,
    withAuthorization: true,
    label: "Page A",
    layout: true,
  },
  {
    path: ROUTE.PageB,
    element: <BPage />,
    withAuthorization: true,
    label: "Page B",
    layout: true,
  },
  {
    path: ROUTE.PageC,
    element: <CPage />,
    withAuthorization: true,
    label: "Page C",
    layout: true,
  },
  {
    path: ROUTE.Login,
    element: <LoginPage />,
    withAuthorization: false,
    label: "Login",
    layout: false,
  },
];
