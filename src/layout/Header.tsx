import { ROUTE } from "../routes/types/route";
import useRoute from "../routes/hooks/useRoute";
import { IHeaderProps } from "./types/header";

import HeaderView from "./views/HeaderView";

const Header = () => {
  const [onRoute] = useRoute();

  const navProps: IHeaderProps = {
    onRouteLogin: () => onRoute(ROUTE.login),
  };

  return <HeaderView {...navProps} />;
};

export default Header;
