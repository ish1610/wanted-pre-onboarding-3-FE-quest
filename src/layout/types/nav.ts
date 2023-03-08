export interface INavProps {
  navContents: NavContent[];
}

export type NavContent = {
  route: () => void;
  label: string;
};
