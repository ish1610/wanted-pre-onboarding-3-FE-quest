import { routerInfo } from "../routes/data/route";
import useRoute from "../routes/hooks/useRoute";
import { INavProps, NavContent } from "./types/nav";
import NavView from "./views/NavView";

const Nav = () => {
  const { onRoute } = useRoute();
  const navContents = routerInfo.reduce((prev: NavContent[], current) => {
    if (current.layout) {
      return [
        ...prev,
        { route: () => onRoute(current.path), label: current.label },
      ];
    }

    return prev;
  }, []);

  const navProps: INavProps = {
    navContents,
  };

  return <NavView {...navProps} />;
};

export default Nav;
