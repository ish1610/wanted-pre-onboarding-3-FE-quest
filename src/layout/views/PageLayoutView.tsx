import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const PageLayoutContainer = styled.div`
  display: flex;
`;

const PageLayoutView = () => {
  return (
    <PageLayoutContainer>
      <Nav />
      <Outlet />
    </PageLayoutContainer>
  );
};

export default PageLayoutView;
