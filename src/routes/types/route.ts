export enum ROUTE {
  Home = "/",
  PageA = "/page-a",
  PageB = "/page-b",
  PageC = "/page-c",
  Login = "/login",
}

export type RouterItem = {
  path: ROUTE;
  element: React.ReactNode;
  withAuthorization: boolean;
  label: string;
  layout: boolean;
};

export type HandleRouteFn = (route: ROUTE) => void;
