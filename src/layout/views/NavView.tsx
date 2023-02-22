import styled from "@emotion/styled";
import { colorBlue, colorBorder } from "../../common/styles/commonColor";
import { flexCenter } from "../../common/styles/commonLayout";
import { INavProps } from "../types/nav";

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  ${flexCenter}
  background-color: rgba(230, 230, 230, 0.7);
  color: #333;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${colorBorder};
  width: 100%;
  z-index: 9;
  height: 58px;
  min-width: 560px;
`;

const NavMenu = styled.ul`
  display: flex;

  li {
    margin-right: 50px;
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-weight: 700;
    transition: 0.3s;
    font-size: 14px;
    list-style: none;
    padding: 10px 0;
  }
  li:last-child {
    margin-right: 0;
  }

  button {
    padding: inherit;
  }

  button:hover {
    color: ${colorBlue};
  }
`;

const NavView = ({ onRoutePageA, onRoutePageB, onRoutePageC }: INavProps) => {
  return (
    <NavContainer>
      <NavMenu>
        <li onClick={onRoutePageA}>
          <button>Page A</button>
        </li>
        <li onClick={onRoutePageB}>
          <button>Page B</button>
        </li>
        <li onClick={onRoutePageC}>
          <button>Page C</button>
        </li>
      </NavMenu>
    </NavContainer>
  );
};

export default NavView;
