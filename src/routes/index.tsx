import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../features/login/components/Login";

import PageLayout from "../layout/PageLayout";
import APage from "../pages/APage";
import BPage from "../pages/BPage";
import CPage from "../pages/CPage";
import { IRouteProps, ROUTE } from "./types/route";

const AppRoute = ({ isLogin }: IRouteProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={isLogin ? <PageLayout /> : <Login />}>
          <Route path={"/"} element={<APage />} />
          <Route path={ROUTE.PageA} element={<APage />} />
          <Route path={ROUTE.PageB} element={<BPage />} />
          <Route path={ROUTE.PageC} element={<CPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
