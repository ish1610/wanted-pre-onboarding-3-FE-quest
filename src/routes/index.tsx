import { Router } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import Authorization from "../features/login/components/Authorization";
import PageLayoutView from "../layout/views/PageLayoutView";

import { routerInfo } from "./data/route";
import { RouterItem } from "./types/route";

export const ReactRouteObject: Router = createBrowserRouter(
  routerInfo.map((routerItem: RouterItem) => {
    if (routerItem.withAuthorization && routerItem.layout) {
      return {
        path: routerItem.path,
        element: (
          <Authorization>
            <PageLayoutView>{routerItem.element}</PageLayoutView>
          </Authorization>
        ),
      };
    }

    if (routerItem.withAuthorization && !routerItem.layout) {
      return {
        path: routerItem.path,
        element: <Authorization>{routerItem.element}</Authorization>,
      };
    }

    if (!routerItem.withAuthorization && routerItem.layout) {
      return {
        path: routerItem.path,
        element: <PageLayoutView>{routerItem.element}</PageLayoutView>,
      };
    }

    return { path: routerItem.path, element: routerItem.element };
  })
);
