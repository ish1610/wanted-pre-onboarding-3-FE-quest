import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import PageLayout from "../layout/PageLayout";
import APage from "../pages/APage";
import BPage from "../pages/BPage";
import CPage from "../pages/CPage";
import LoginPage from "../pages/LoginPage";
import { IRouteProps, ROUTE } from "./types/route";

const AppRoute = ({ isLogin }: IRouteProps) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLogin && (
          <Route element={<PageLayout />}>
            <Route path={"/"} element={<APage />} />
            <Route path={ROUTE.PageA} element={<APage />} />
            <Route path={ROUTE.PageB} element={<BPage />} />
            <Route path={ROUTE.PageC} element={<CPage />} />
          </Route>
        )}

        <Route path={ROUTE.Login} element={<LoginPage />} />

        <Route path="*" element={<Navigate to={ROUTE.Login} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
