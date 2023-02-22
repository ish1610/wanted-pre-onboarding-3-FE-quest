export enum ROUTE {
  PageA = "/",
  PageB = "/page-b",
  PageC = "/page-c",
  login = "/login",
}

export type HandleRouteFn = (route: ROUTE) => void;
