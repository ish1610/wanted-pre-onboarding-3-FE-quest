import styled from "@emotion/styled";
import { colorBlue, colorBorder } from "../../common/styles/commonColor";
import { flexCenter } from "../../common/styles/commonLayout";
import { INavProps } from "../types/nav";

const NavContainer = styled.nav`
  height: calc(100vh - 80px);
  background-color: rgba(230, 230, 230, 0.7);
  color: #333;

  border-right: 1px solid ${colorBorder};
`;

const NavMenu = styled.ul`
  ${flexCenter}
  flex-direction: column;
  padding: 50px;

  li {
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-weight: 700;
    transition: 0.3s;
    font-size: 14px;
    margin-bottom: 40px;
  }

  button:hover {
    color: ${colorBlue};
  }
`;

const NavView = ({ navContents }: INavProps) => {
  return (
    <NavContainer>
      <NavMenu>
        {navContents.map((navContent) => (
          <li onClick={navContent.route}>
            <button>{navContent.label}</button>
          </li>
        ))}
      </NavMenu>
    </NavContainer>
  );
};

export default NavView;
