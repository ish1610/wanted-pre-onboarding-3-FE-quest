import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../features/login/components/Login";
import Header from "../layout/Header";

import PageLayout from "../layout/PageLayout";
import APage from "../pages/APage";
import BPage from "../pages/BPage";
import CPage from "../pages/CPage";
import { ROUTE } from "./types/route";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<PageLayout />}>
          <Route path={ROUTE.PageA} element={<APage />} />
          <Route path={ROUTE.PageB} element={<BPage />} />
          <Route path={ROUTE.PageC} element={<CPage />} />
        </Route>

        <Route path={ROUTE.login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
