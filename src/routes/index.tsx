import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../features/login/components/Login";

import PageLayout from "../layout/PageLayout";
import APage from "../pages/APage";
import BPage from "../pages/BPage";
import CPage from "../pages/CPage";
import { ROUTE } from "./types/route";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={"/"} element={<APage />} />
          <Route path={ROUTE.PageA} element={<APage />} />
          <Route path={ROUTE.PageB} element={<BPage />} />
          <Route path={ROUTE.PageC} element={<CPage />} />
        </Route>

        <Route path={ROUTE.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
